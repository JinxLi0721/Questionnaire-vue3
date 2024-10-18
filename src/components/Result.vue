<script setup>
import { defineProps, inject } from "vue";
import { RouterLink, useRoute } from "vue-router";

const { question, totalScore } = defineProps(["question", "totalScore"]);

const reload = inject('reload')
const grade = question.grades.find(item => totalScore <= item.gradesRange.max && totalScore >= item.gradesRange.min);


</script>
<template>
    <h4>
        您的檢測結果：
    </h4>
    <span>
        {{grade.statisticsStatus}}
    </span>
    <h4>
        建議：
    </h4>
    <p>
        {{grade.description}}
    </p>
    <p>
        {{grade.suggestion}}
    </p>
    <h4>
        參考資料：
    </h4>
    <p v-for="references in question.references">
       {{ references }}
    </p>
    <p>
        此問卷僅為參考，若有疑慮建議尋找專業資源協助。
    </p>
    <div class="result-footer">
        <RouterLink to="/">返回問卷</RouterLink>
        <a href="#" class="button" @click="reload">再測一次</a>
    </div>
</template>
