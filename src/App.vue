<script setup>
import { RouterView } from "vue-router";
import { ref, provide, nextTick } from "vue";

const isRouterAlive = ref(true);

const reload = () => {
    isRouterAlive.value = false;
    nextTick(() => {
        isRouterAlive.value = true;
    });
};

provide("reload", reload);
</script>

<template>
    <RouterView v-slot="{ Component }" v-if="isRouterAlive">
        <transition name="fade-page">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>
<style>
html {
    min-height: 100vh;
    background-color: #9b8281;
}

.fade-page-leave-active {
    transition: all 0.5s;
}

.fade-page-enter-active {
    transition: all 1.5s;
}
.fade-page-enter-from,
.fade-page-leave-to {
    transform: translateY(30px);
    opacity: 0;
}
</style>
