<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import questionnaires from "../data/questionnaire.json";

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
    <div class="instructions">
        <h3>{{ question.instructions }}</h3>
    </div>
    <Question :question="question.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
</template>
