<template>
    <div class="container">
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

<style scoped lang="scss">
@import "../styleGuide.scss";

.container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    margin: 20px 40px 40px 40px;
    padding: 20px 24px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    border-radius: 20px;
    border: 8px solid $grey100;
    background: rgba(255, 234, 236, 0.6);
    box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
