<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import questionnaires from "../data/questionnaire.json";
import Result from "@/components/Result.vue";

const route = useRoute();
const question = questionnaires.find(q => q._id === route.params._id);
const currentQuestionIndex = ref(0);
const totalScore = ref(0);

const onOptionSelected = score => {
    totalScore.value += score;
    currentQuestionIndex.value++;
};
</script>
<template>
    <h2 class="q-title">{{ question.title }}</h2>
    <div class="question-content" v-if="currentQuestionIndex != question.questions.length">
        <div class="instructions">
            <p>{{ question.instructions }}</p>
        </div>
        <Question :question="question.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
    </div>
    <div class="result-content" v-else>
        <Result :question="question" :totalScore="totalScore" />
    </div>
</template>
<style scoped>
.q-title {
    margin: 5% 15% 0 15%;
    color: #534847;
}
.instructions {
    margin-left: 15%;
    margin-right: 15%;
}
</style>
