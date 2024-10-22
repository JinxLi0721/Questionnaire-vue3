<script setup>
import { defineProps, inject } from "vue";
import { RouterLink, useRoute } from "vue-router";

const { question, totalScore } = defineProps(["question", "totalScore"]);

const reload = inject("reload");
const grade = question.grades.find(item => totalScore <= item.gradesRange.max && totalScore >= item.gradesRange.min);
</script>
<template>
    <div class="result-container">
        <div class="result">
            <h4 class="status">您的檢測結果：</h4>
            <p>
                {{ grade.statisticsStatus }}
            </p>
            <h4 class="description">建議：</h4>
            <p>
                {{ grade.description }}
            </p>
            <p class="suggestion">
                {{ grade.suggestion }}
            </p>
            <h4>參考資料：</h4>
            <p v-for="references in question.references">
                {{ references }}
            </p>
            <p class="remind">此問卷僅為參考，若有疑慮建議尋找專業資源協助。</p>
            <div class="result-footer">
                <RouterLink to="/">返回問卷</RouterLink>
                <a href="#" class="button" @click="reload">再測一次</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.result-container {
    background-color: rgb(253, 240, 240);;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}
.result {
    margin-left: 15%;
    margin-right: 10%;
    margin-bottom: 5%;
    padding-bottom: 5%;
}
h4 {
    color: #534847;
    font-size: small;
    padding-top: 20px;
    line-height: 1.8;
    border-bottom: 1px solid #ddd;
}
.remind {
    text-decoration: solid underline hsl(0, 0%, 87%) 5px;
}
.status p {
    margin-top: 60px;
}
.result-footer {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.result-footer a {
    background-color: #534847;
    padding: 10px;
    color: #ddd;
    border-radius: 5px;
    font-weight: 550;
    text-decoration: none;
}
</style>
