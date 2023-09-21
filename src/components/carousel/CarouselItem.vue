<template>
    <div class="carousel-item" :class="{ active }">
        <p class="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    active: Boolean,
    title: String,
  },
};
</script>

<style lang="scss">
@import "../styleGuide.scss";

.carousel-item {
    @include Heading-20;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    background-color: $grey100;;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    margin: 0 15px;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    transition: height 0.3s, font-size 0.3s, background-color 0.3s;

    &.active {
        @include Heading-28;
        height: 60px;
        background-color: $main200;
    }
}
</style>
