<template>
    <MainHeader title="Test"/>
    <p>test</p>
    <p>{{ category}}</p>
</template>

<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
import { useRoute } from "vue-router";

const category = useRoute().params.category;
</script>
