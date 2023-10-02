<template>
    <MainHeader title="LOGO" is-logo="true"/>
    <div class="home">
        <CarouselPreview :selectedIndex="selectedIndex"/>
        <div class="carousel-container">
            <Carousel
                :selected-index="selectedIndex"
                :set-selected-index="setSelectedIndex"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import CarouselPreview from "@/components/carousel/CarouselPreview.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CarouselPreview,
    Carousel,
    MainHeader,
  },
  data() {
    return {
      selectedIndex: 2,
    };
  },
  methods: {
    setSelectedIndex(index: number) {
      this.selectedIndex = index;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/components/styleGuide.scss";

.home {
    display: flex;
    flex-direction: column;
    background-color: $grey200;
    flex: 1;
}

.carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
