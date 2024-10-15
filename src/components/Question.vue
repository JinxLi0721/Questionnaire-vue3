<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOpt = score => {
    emit("selectOption", score);
};
</script>
<template>
    <div class="question-container">
        <h3>
            {{ question.description }}
        </h3>
    </div>
    <div class="options-container">
        <div v-for="option in question.options" @click="emitSelectedOpt(option.score)" class="option">
            <span>{{ option.description }}</span>
        </div>
    </div>
</template>
