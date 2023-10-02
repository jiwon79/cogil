<template>
    <div class="button-wrap">
        <button
            v-for="(label, index) in props.labelList"
            :key="index"
            class="button"
            @click="props.setCurIndex(index)"
            :class="{ active: index === props.curIndex }">
            {{ label }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  labelList: string[];
  curIndex: number;
  setCurIndex: (index: number) => void;
}>();

</script>

<style scoped lang="scss">

@import "@/components/styleGuide.scss";

.button-wrap {
    display: flex;
    padding: 12px 16px;
    gap: 4px;
    background-color: $grey100;
    overflow-x: scroll;
}

.button {
    @include Label-14;

    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    color: $grey600;

    &.active {
        border-radius: 100px;
        background-color: $main200;
        color: $main500;
    }
}

</style>
