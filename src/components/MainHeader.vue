<template>
    <header v-if="!isLogo">
        <button @click="back">
            <img src="/icons/ic_arrow_prev.svg" alt="back button">
        </button>
        <p>{{ title }}</p>
    </header>
    <header v-if="isLogo">
        <p>COGIL</p>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
    isLogo: {
      required: false,
      type: Boolean,
      default: false,
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
});
</script>

<style lang="scss">
header {
  display: flex;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

img {
  width: 24px;
  height: 24px;
}
</style>
