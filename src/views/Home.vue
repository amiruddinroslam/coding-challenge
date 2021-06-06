<template>
  <div class="header">
    <h2>Coding Challenge</h2>
    <p>Compiled answers for the Affin Hwang Capital - Frontend developer coding challenge.</p>
  </div>
  <ul>
    <li v-for="answer in answerData" :key="answer.id">
      <router-link :to="answer.link">{{ answer.name }}</router-link></li>
  </ul>
  <div class="container">
    <router-view></router-view>
  </div>
  <footer>
    <small>Prepared by Muhammad Amiruddin.</small>
  </footer>
</template>

<script>
import Answer from "../components/Answer.vue";

export default {
  components: {
    Answer,
  },
  data() {
    return {
      answerData: [
        {
          id: 1,
          name: "Answer 1",
          link: "/answer-1",
        },
        {
          id: 2,
          name: "Answer 2",
          link: "/answer-2",
        },
        {
          id: 3,
          name: "Answer 3",
          link: "/answer-3",
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  font-size: 28px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: lightgray;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: grey;
}

.router-link-active {
  background-color: darkgray;
}

.container {
  margin: 3% 15%;
}

small {
  font-style: italic;
}
</style>
