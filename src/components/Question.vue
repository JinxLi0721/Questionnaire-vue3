<script setup>
import { defineProps, defineEmits } from "vue";
import gsap from "gsap";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption", "extraSuggest"]);

const emitSelectedOpt = (event, score, extraSuggest) => {
    const target = event.target;

    gsap.to(target, {
        duration: 0.9,
        backgroundColor: "rgb(207, 156, 135)",
        color: "white",

        onComplete: () => {
            emit("selectOption", score);
            emit("extraSuggest", extraSuggest);
        }
    });
};
const animateOnHover = (event, isEntering) => {
    const target = event.target;

    if (isEntering) {
        gsap.to(target, {
            duration: 0.3,
            border: "5px solid rgba(207, 156, 135,0.6)"
        });
    } else {
        gsap.to(target, {
            duration: 0.3,
            border: 0
        });
    }
};
</script>
<template>
    <div class="question-container">
        <p>
            {{ question.description }}
        </p>

        <div class="options-container">
            <div
                v-for="(option, index) in question.options"
                @click="emitSelectedOpt($event, option.score, option.extraSuggest)"
                class="option"
                :key="index"
                @mouseenter="animateOnHover($event, true)"
                @mouseleave="animateOnHover($event, false)"
            >
                {{ option.description }}
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
