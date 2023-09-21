<template>
    <header v-if="!isLogo" class="header">
        <button @click="back">
            <img src="/icons/ic_arrow_prev.svg" alt="back button">
        </button>
        <p>{{ title }}</p>
    </header>
    <header v-if="isLogo" class="header header-logo">
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

<style scoped lang="scss">
@import "styleGuide.scss";

.header {
    display: flex;
    height: 52px;
}

.header-logo {
    @include Heading-24;
    justify-content: center;
    align-items: center;
}

.header {
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
