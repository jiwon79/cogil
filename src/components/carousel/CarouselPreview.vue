<template>
    <div class="container">
        <div class="content">
            <component :is="currentItem.preview as any"></component>
        </div>
        <a class="link" :href="link">보러가기</a>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import homeCarouselList from "./list";

const props = defineProps<{
  selectedIndex: number;
}>();

const currentIndex = computed(() => props.selectedIndex % homeCarouselList.length);
const currentItem = computed(() => homeCarouselList[currentIndex.value]);
const link = computed(() => `/${currentItem.value.name}`);

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

.link {
    @include Label-14;

    align-self: end;
    display: flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid $grey650;
    color: $grey650;
}
</style>
