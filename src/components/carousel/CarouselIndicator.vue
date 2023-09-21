<template>
    <div class="container">
        <button @click="setPrevIndex" class="button">
            <img src="/icons/ic_arrow_prev.svg" alt="prev button">
        </button>
        <div class="indicator-wrap">
            <div
                v-for="i in indicatorCount"
                :key="i"
                class="indicator-item"
                :class="{ active: i === selectedIndex }"/>
        </div>
        <button @click="setNextIndex" class="button">
            <img src="/icons/ic_arrow_next.svg" alt="next button">
        </button>
    </div>
</template>

<script lang="ts">

export default {
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
    indicatorCount: {
      type: Number,
      default: 0,
    },
    setPrevIndex: {
      type: Function,
      default: () => {
      },
    },
    setNextIndex: {
      type: Function,
      default: () => {
      },
    },
  },
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 20px 0 30px 0;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
}

.indicator-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
}

.indicator-item {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #d1d6dc;

    &.active {
        background-color: #ff7781;
    }
}

</style>
