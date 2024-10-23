<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import questionnaires from "../data/questionnaire.json";

const router = useRouter();

const show = ref(false);
const qu = ref();

const showModal = q => {
    show.value = true;
    qu.value = q;
    if(typeof(q.explain) === 'string') {
        qu.value.explain = q.explain.split("/");
    }
};

const goQuestion = event => {
    event.preventDefault();
    if (qu.value) {
        return router.push(`/questionnaires/${qu.value._id}`);
    }
};
</script>

<template>
    <main>
        <div class="overlay" v-if="show">
            <div class="modal-content">
                <div class="modal-body">
                    <p class="explain-text" v-for="ex in qu.explain">
                        {{ ex }}
                    </p>
                </div>
                <div class="modal-footer">
                    <a class="button" href="#" @click="goQuestion">開始測驗</a>
                    <a class="button" href="#" @click="show = false">關閉</a>
                </div>
            </div>
        </div>
        <div class="container">
            <header>
                <h1>自我評估問卷</h1>
            </header>

            <div class="list-container">
                <Card v-for="question in questionnaires" :question="question" @click="showModal(question)" />
            </div>
        </div>
    </main>
</template>

<style scoped>
header {
    margin-top: 8%;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fadad8;
}

.list-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20%;
    margin-right: 20%;
}

.overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.57);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: 110%;
    height: 110%;
    top: -3%;
    left: -5%;
}

.modal-content {
    width: 550px;
    background-color: rgb(253, 240, 240);
    border-radius: 10px;
    padding: 35px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal-body p {
    font-size: 16px;
}
.modal-footer {
    display: flex;
    justify-content: space-around;
}
.modal-footer a {
    background-color: #534847;
    padding: 10px;
    color: #fadad8;
    border-radius: 5px;
    font-weight: 550;
    text-decoration: none;
}
</style>
