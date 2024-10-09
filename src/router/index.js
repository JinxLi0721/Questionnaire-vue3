import { createRouter, createWebHistory } from "vue-router";
import Questionnaires from "@/views/Questionnaires.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "questionnaireList",
            component: Questionnaires
        }
    ]
});

export default router;
