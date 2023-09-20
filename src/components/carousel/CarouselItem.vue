<template>
    <div ref="element" class="carousel-item" :class="{ active }">
        <p class="title">{{ title }}</p>
        <p>{{ active }}</p>
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

// scss
<style lang="scss">
.carousel-item {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  margin-right: 20px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;

  &.active {
    background-color: #ccc;
    //width: 200px;
  }
}
</style>
