<template>
    <div class="card">
        <h3>{{ answer.name }}</h3>
        <router-link :to="answer.link">{{ answer.link }}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        answer: {
            answer: Object
        }
    }
}
</script>
<style scoped>
    .card {
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px 40px;
        margin: 10px auto;
    }
</style>