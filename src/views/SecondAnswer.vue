<template>
    <figure>
        <img src="../assets/carbon-answer-2-es6.png" alt="carbon-question-1" class="code-snippet"/>
        <figcaption><small>Solution using ES6</small></figcaption>
    </figure>
    <div class="text">
        <p>By using let keyword, it implements a block-scoped variable instead of var which is a function scoped.</p>
    </div>
    <figure>
        <img src="../assets/carbon-answer-2-es5.png" alt="carbon-question-1" class="code-snippet"/>
        <figcaption><small>Solution using ES5</small></figcaption>
    </figure>
    <div class="text">
        <p>In the other hand, by using immediately invoked function expression (IIFE), it creates a new scope for the onclick event. Demo at 
            <a href="https://jsbin.com/toyijazemo/edit?html,js,console,output" target="_blank">JSBin.</a></p>
    </div>
</template>

<style scoped>
.text {
    margin: 30px 0;
    text-align: left;
}
</style>