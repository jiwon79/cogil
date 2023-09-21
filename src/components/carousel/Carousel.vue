<template>
    <div
        class="carousel"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @mousemove="onDrag"
        @touchmove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @touchend="stopDrag"
    >
        <div class="carousel-track" ref="carouselTrack">
            <CarouselItem
                v-for="i in this.totalCount * 3"
                :key="`${i}-${selectedIndex}`"
                :title="homeCarouselList[(i % this.totalCount)].title"
                v-bind:active="(i % this.totalCount) === (this.selectedIndex % this.totalCount)"/>
        </div>
    </div>
    <CarouselIndicator
        :selectedIndex="selectedIndex"
        :indicatorCount="totalCount"
        :setPrevIndex="prevItem"
        :setNextIndex="nextItem"/>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselIndicator from "./CarouselIndicator.vue";
import homeCarouselList from "./list";

export default {
  components: {CarouselIndicator, CarouselItem},
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    },
    setSelectedIndex: {
      type: Function,
      default: () => {
      },
    },
  },
  data() {
    return {
      isDragging: false,
      prevPageX: 0,
      prevScrollLeft: 0,
      itemWidth: 200,
      useWidth: 200 + 20,
      positionDiff: 0,
      homeCarouselList,
      totalCount: homeCarouselList.length,
      isButtonSliding: false,
    };
  },
  mounted() {
    this.$refs.carouselTrack.scrollLeft = this.useWidth * this.totalCount;
    this.$refs.carouselTrack.addEventListener("scroll", this.infiniteScroll);
    this.$refs.carouselTrack.addEventListener("transitionend", () => {
      console.log("end");
    });
  },
  methods: {
    slide() {
      this.$refs.carouselTrack.scrollLeft += 20;
    },
    transitionEnd() {
      console.log("end");
      // this.isButtonSliding = false;
    },
    prevItem() {
      const scrollLeft =
        parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) *
        this.useWidth -
        this.useWidth;
      this.$refs.carouselTrack.scrollLeft = scrollLeft;
      this.setSelectedIndexByScrollLeft(scrollLeft);
    },
    nextItem() {
      var temp =
        parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) *
        this.useWidth +
        this.useWidth;
      this.$refs.carouselTrack.scrollLeft = temp;
      this.setSelectedIndexByScrollLeft(temp);
    },
    startDrag(e) {
      this.isDragging = true;
      this.prevPageX = e.pageX || e.touches[0].pageX;
      this.prevScrollLeft = this.$refs.carouselTrack.scrollLeft;
    },
    onDrag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      this.positionDiff = (e.pageX || e.touches[0].pageX) - this.prevPageX;
      this.$refs.carouselTrack.scrollLeft =
        this.prevScrollLeft - this.positionDiff;
      this.$refs.carouselTrack.classList.add("dragging");
      this.setSelectedIndexByScrollLeft(this.$refs.carouselTrack.scrollLeft);
    },
    stopDrag() {
      this.isDragging = false;
      this.$refs.carouselTrack.classList.remove("dragging");
      this.autoSlide();
    },
    autoSlide() {
      if (
        this.$refs.carouselTrack.scrollLeft % this.useWidth >
        this.useWidth / 2
      ) {
        this.$refs.carouselTrack.scrollLeft =
          (parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) + 1) *
          this.useWidth;
      } else {
        this.$refs.carouselTrack.scrollLeft =
          parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) *
          this.useWidth;
      }
    },
    infiniteScroll() {
      if (this.$refs.carouselTrack.scrollLeft === 0) {
        this.$refs.carouselTrack.classList.add("no-transition");
        this.$refs.carouselTrack.scrollLeft =
          this.$refs.carouselTrack.scrollWidth -
          2 * this.useWidth * this.totalCount;
        this.prevPageX += this.useWidth * this.totalCount;

        this.$refs.carouselTrack.classList.remove("no-transition");
      } else if (
        Math.ceil(this.$refs.carouselTrack.scrollLeft) ===
        this.$refs.carouselTrack.scrollWidth -
        this.$refs.carouselTrack.offsetWidth
      ) {
        this.$refs.carouselTrack.classList.add("no-transition");
        this.$refs.carouselTrack.scrollLeft = this.useWidth * this.totalCount;
        this.prevPageX -= this.useWidth * this.totalCount;
        this.$refs.carouselTrack.classList.remove("no-transition");
      }
    },
    setSelectedIndexByScrollLeft(scrollL) {
      if (scrollL % this.useWidth > this.useWidth / 2) {
        const newSelectedIndex =
          ((parseInt(scrollL / this.useWidth) + 1 + 1) % this.totalCount) + 1;
        this.setSelectedIndex(newSelectedIndex);
      } else {
        const newSelectedIndex =
          (parseInt(scrollL / this.useWidth + 1) % this.totalCount) + 1;
        this.setSelectedIndex(newSelectedIndex);
      }
    },
  },
};
</script>

<style>
.carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    /* width: 1200px; */
}

.carousel-track {
    width: 660px;
    display: flex;
    overflow: hidden;
    transition: transform 0.3s;
    scroll-behavior: smooth;
}

.carousel-track.no-transition {
    scroll-behavior: auto;
}

.carousel-track.dragging {
    cursor: grab;
    scroll-behavior: auto;
    pointer-events: none;
}
</style>
