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