<template>
    <figure>
        <img src="../assets/carbon-question-1.png" alt="carbon-question-1" class="code-snippet"/>
        <figcaption><small>Code from Question 1</small></figcaption>
    </figure>
    <div class="text">
        <p>The above function will not work as intended because the indexOf() function returns -1 if no match found.</p>

        <p>In the above function, the result for indexOf() is compared by falsy/truthy values.</p>

        <p>In Javascript, 0 and negative numbers is considered as falsy values.</p>

        <p>So for the first case, which is 'I love ironman', the indexOf() returns 7 
        since a match is found in that position in a string and 7 is a truthy value, thus validateString() will not throw an error. </p>

        <p>For second case, 'Ironman is awesome!' throws an error because indexOf() returns a 0, which is a falsy value, 
        even though the match is found, but by comparing using falsy/truthy values, validateString() will throw an error.</p>
    </div>
    <div class="text">
        <p>Since indexOf() returns -1 if the match is not found, the correct way is to compare it by the return value:</p>
    </div>
    <figure>
        <img src="../assets/carbon-answer-1.png" alt="carbon-question-1" class="code-snippet"/>
        <figcaption><small>Answer for Question 1</small></figcaption>
    </figure>
    <div class="text">
        <p>Where -1 means the string is not found.</p>
    </div>
</template>

<style scoped>
.text {
    margin: 30px 0;
    text-align: left;
}
</style>