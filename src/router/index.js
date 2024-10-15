import { createRouter, createWebHistory } from "vue-router";
import Questionnaires from "@/views/QuestionnairesView.vue";
import Question from "@/views/QuestionView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "questionnaireList",
            component: Questionnaires,
        },
        {
            path: "/questionnaires/:_id",
            name: "questionnaire",
            component: Question,
        }
    ]
});

export default router;
