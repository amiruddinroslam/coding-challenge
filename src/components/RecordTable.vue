<template>
    <div>
        <Filters @filter-exchange="filterExchange" @filter-date="filterDate"/>
    </div>
  <table id="records">
    <tr>
      <th>NAME</th>
      <th>EXCHANGE</th>
      <th>CODE</th>
      <th>DATE ADDED</th>
      <th>PRICE ADDED</th>
      <th>CURRENT PRICE</th>
      <th>CHANGE</th>
    </tr>
    <tr v-show="records.length" v-for="record in records" :key="record.code">
      <td>{{ record.name }}</td>
      <td>{{ record.exchange }}</td>
      <td>{{ record.code }}</td>
      <td>{{ record.dateAdded }}</td>
      <td>{{ currency(record.priceAdded, record.currency) }}</td>
      <td>{{ currency(record.priceCurrent, record.currency) }}</td>
      <td :class="record.priceCurrent - record.priceAdded > 0 ? 
          'positive' : record.priceCurrent - record.priceAdded < 0 ? 
          'negative' : ''">
            {{ calculateChange(record.priceAdded, record.priceCurrent) }}
      </td>
    </tr>
    <tr v-show="records.length === 0">
        <td colspan="7" class="no-result">No results</td>
    </tr>
  </table>
</template>

<script>
import Filters from './Filters.vue'

export default {
    components: {
        Filters
    },
    data() {
        return {
            exhcangeFilter: '',
            monthFilter: '',
            priceImpact: ''
        }
    },
    mounted() {
        this.$store.dispatch('getRecords')
    },
    computed: {
        records() {
            // return (
            //     this.exhcangeFilter || this.monthFilter ?
            //     this.$store.state.records.filter(record => {
            //         return record.exchange === this.exhcangeFilter && record.dateAdded.includes(`-${this.monthFilter}-`)
            //     }) : this.$store.state.records)

            if (this.exhcangeFilter && !this.monthFilter) {
                return this.$store.state.records.filter(record => record.exchange === this.exhcangeFilter)
            } else if (!this.exhcangeFilter && this.monthFilter) {
                return this.$store.state.records.filter(record => record.dateAdded.includes(`-${this.monthFilter}-`))
            } else if (this.exhcangeFilter && this.monthFilter) {
                return this.$store.state.records
                    .filter(record => record.exchange === this.exhcangeFilter)
                    .filter(record => record.dateAdded.includes(`-${this.monthFilter}-`))
            } else {
                return this.$store.state.records
            }

        }
    },
    methods: {
        currency(value, currency) {
            let locale = currency === 'USD' ? 'en-US' : currency === 'MYR' ? 'ms-MY' : undefined
            let formatter = new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: currency,
            });

            return formatter.format(value);
        },
        filterExchange(exchange) {
            this.exhcangeFilter = exchange
            sessionStorage.setItem('exchangeFilter', exchange)
        },
        filterDate(month) {
            this.monthFilter = month
            sessionStorage.setItem('monthFilter', month)
        },
        calculateChange(added, current) {
            let priceChange = current - added
            let percentageChange = Math.abs((priceChange / added) * 100)
            return `${(priceChange <= 0 ? "" : "+") + this.roundPrice(priceChange)} (${this.roundPrice(percentageChange)}%)`
        },
        roundPrice(price) {
            return (Math.round(price * 100) / 100).toFixed(2)
        }
    }
}
</script>

<style scoped>
#records {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#records td,
#records th {
  border: 1px solid #ddd;
  padding: 8px;
}

#records tr:nth-child(even) {
  background-color: #f2f2f2;
}

#records tr:hover {
  background-color: #ddd;
}

#records th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
}

#records td {
    text-align: left;
}

#records td.positive {
    color: green;
}

#records td.negative {
    color: red;
}

#records td.no-result {
    text-align: center;
    font-style: italic;
}
</style>