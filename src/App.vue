<script>
import navbar from './components/navbar.vue';
import AppHome from './pages/AppHome.vue';
import AppFooter from './components/AppFooter.vue'
export default {
    components: {
        navbar,
        AppHome,
        AppFooter,
    }
}
</script>

<template>
    <navbar />
    <AppHome />
    <AppFooter />
</template>

<style scoped></style>
