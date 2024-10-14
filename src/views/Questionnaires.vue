<script setup>
import { ref } from "vue";
import Card from "@/components/Card.vue";
import questionnaires from "../data/questionnaire.json";

const show = ref(false);
const qu = ref();

const showModal = q => {
    show.value = true;
    qu.value = q;
};

</script>

<template>
    <div class="container">
        <header>
            <h1>自我評估問卷</h1>
        </header>
        <main>
            <div class="list-container">
                <Card
                    v-for="question in questionnaires"
                    :question="question"
                    @click="showModal(question)"
                />
            </div>
            <div class="modal" v-if="show">
                <div class="modal-content">
                    <div class="modal-body">
                        <p class="explain-text">
                            {{ qu.explain }}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a class="button" href="#">開始測驗</a>
                        <a class="button" href="#" @click="show=false">關閉</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>