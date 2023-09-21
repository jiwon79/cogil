<template>
    <header v-if="!isLogo" class="header">
        <button @click="back" class="button button-size">
            <img src="/icons/ic_arrow_prev.svg" alt="back button">
        </button>
        <p>{{ title }}</p>
        <div class="button-size"></div>
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
    padding: 0 18px;
    justify-content: space-between;
    align-items: center;
    @include Heading-24;
}

.header-logo {
    justify-content: center;
}

.button-size {
    width: 24px;
    height: 24px;
}

</style>
