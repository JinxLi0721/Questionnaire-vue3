<script setup>
import { defineProps } from 'vue';

const {question} = defineProps(['question'])

</script>

<template>
    <div class="card">
        <div class="card-title">
            <h3>{{ question.title }}</h3>
            <p>題數：{{ question.questions.length}}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 2% 5% 2% 5%; 
    width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius:15px;
    /* background-color:rgb(247, 219, 183); */
    background-color:#FADAD8;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.card-title {
display: flex;
justify-content: space-between;
align-items: baseline;
color: #534847;
}


.card-title p {
   font-size:13px;
}
</style>