<template>
    <div>
        <component :is="currentPreview as any"></component>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import homeCarouselList from "./list";

const props = defineProps<{
  selectedIndex: number;
}>();

const currentIndex = computed(() => props.selectedIndex % homeCarouselList.length);
const currentPreview = computed(() => homeCarouselList[currentIndex.value].preview);
</script>

