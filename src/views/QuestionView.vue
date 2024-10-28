<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import questionnaires from "../data/questionnaire.json";
import Result from "@/components/Result.vue";
import gsap from "gsap";

const route = useRoute();
const question = questionnaires.find(q => q._id === route.params._id);
const currentQuestionIndex = ref(0);
const totalScore = ref(0);
const extraSuggest = ref([]);

const onOptionSelected = score => {
    totalScore.value += score;
    currentQuestionIndex.value++;
};

const onExtraSuggest = v => {
    if (v) {
        extraSuggest.value.push(v);
    }
};

function enter(el, done) {
    gsap.set(el, {
        opacity: 0,
        y: 0
    });

    gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        onComplete: done
    });
}

function leave(el) {
    gsap.to(el, {
        duration: 0.2,
        y: 0,
        opacity: 0
    });
}

function resultLeave(el, done) {
    gsap.to(el, {
        duration: 1,
        y: -100,
        opacity: 0,
        onComplete: done
    });
}

function resultEnter(el) {
    gsap.set(el, {
        opacity: 0
    });
    
    gsap.to(el, {
        duration: 1.5,
        opacity: 1
    });
}
</script>
<template>
    <div class="question-view">
        <h2 class="q-title">{{ question.title }}</h2>
        <div class="question-content" v-if="currentQuestionIndex != question.questions.length">
            <div class="instructions">
                <p>{{ question.instructions }}</p>
            </div>
            <transition @enter="enter" @leave="leave">
                <Question
                    :question="question.questions[currentQuestionIndex]"
                    @selectOption="onOptionSelected"
                    @extraSuggest="onExtraSuggest"
                    :key="currentQuestionIndex"
                />
            </transition>
        </div>
        <div class="result-content" v-else>
            <transition @enter="resultEnter" @leave="resultLeave" appear mode="out-in">
                <Result
                    :question="question"
                    :totalScore="totalScore"
                    :extraSuggest="extraSuggest"
                    :key="question._id"
                />
            </transition>
        </div>
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
