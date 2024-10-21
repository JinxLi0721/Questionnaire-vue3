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
        <p>
            {{ question.description }}
        </p>

        <div class="options-container">
            <div v-for="option in question.options" @click="emitSelectedOpt(option.score)" class="option">
                <span>{{ option.description }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin: 5% 20% 0 20%;
    /* background-color: aliceblue; */
}
.question-container p {
    color: rgb(253, 240, 240);
    font-size: 24px;
}
.option {
    padding: 2%;
    /* width: 100%; */

    margin-top: 15px;
    border-radius: 5px;
    background-color: rgb(253, 240, 240);
    cursor: pointer;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.options-container {
    display: grid;
}
</style>
