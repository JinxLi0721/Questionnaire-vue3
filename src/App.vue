<script setup>
import { RouterView } from 'vue-router';
import{ ref, provide, nextTick} from 'vue'

const isRouterAlive = ref(true)

const reload = () => {
    isRouterAlive.value = false;
    nextTick(() => {
        isRouterAlive.value = true
    })
}

provide('reload', reload)
</script>

<template>
        <RouterView v-slot="{Component}" v-if="isRouterAlive">
            <component :is="Component"/>
        </RouterView>

</template>
<style>
html {
    min-height: 100vh;
    background-color:#9B8281;
}
</style>