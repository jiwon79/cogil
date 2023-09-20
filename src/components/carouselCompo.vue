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
                    v-for="i in this.cardNum * 3"
                    :key="`${i}-${selectedIndex}`"
                    :title="(i % this.cardNum).toString()"
                    v-bind:active="(i % this.cardNum) === (this.selectedIndex % this.cardNum)"
            />
        </div>
    </div>
    <div class="indicator">
        <button @click="prevItem">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
            >
                <path
                        d="M11.92 1.77L10.15 0L0.25 9.9L10.15 19.8L11.92 18.03L3.79 9.9L11.92 1.77Z"
                        fill="#494C50"
                />
            </svg>
        </button>
        <div
                v-for="i in this.cardNum"
                :key="i"
                class="indicator-item"
                :class="{ nwIndicator: i === selectedIndex }"
        >
            i
        </div>
        <button @click="nextItem">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
            >
                <path
                        d="M0 2.12L7.88 10L0 17.88L2.12 20L12.12 10L2.12 0L0 2.12Z"
                        fill="#494C50"
                />
            </svg>
        </button>
    </div>
    <div>
        <div>{{ selectedIndex }}</div>
        <div ref="container" class="container">슬라이드 될 내용</div>
        <button @click="slide">Slide</button>
    </div>
</template>

<script>
import CarouselItem from "@/components/carousel/CarouselItem.vue";

export default {
  components: {CarouselItem},
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
      cardNum: 4,
      isButtonSliding: false,
    };
  },
  mounted() {
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
      var temp =
        parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) *
        this.useWidth -
        this.useWidth;
      this.$refs.carouselTrack.scrollLeft = temp;
      this.getNwItem(temp);
    },
    nextItem() {
      var temp =
        parseInt(this.$refs.carouselTrack.scrollLeft / this.useWidth) *
        this.useWidth +
        this.useWidth;
      this.$refs.carouselTrack.scrollLeft = temp;
      this.getNwItem(temp);
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
      this.getNwItem(this.$refs.carouselTrack.scrollLeft);
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
          2 * this.useWidth * this.cardNum;
        this.prevPageX += this.useWidth * this.cardNum;

        this.$refs.carouselTrack.classList.remove("no-transition");
      } else if (
        Math.ceil(this.$refs.carouselTrack.scrollLeft) ===
        this.$refs.carouselTrack.scrollWidth -
        this.$refs.carouselTrack.offsetWidth
      ) {
        this.$refs.carouselTrack.classList.add("no-transition");
        this.$refs.carouselTrack.scrollLeft = this.useWidth * this.cardNum;
        this.prevPageX -= this.useWidth * this.cardNum;
        this.$refs.carouselTrack.classList.remove("no-transition");
      }
    },
    getNwItem(scrollL) {
      if (scrollL % this.useWidth > this.useWidth / 2) {
        const newSelectedIndex =
          ((parseInt(scrollL / this.useWidth) + 1 + 1) % this.cardNum) + 1;
        this.setSelectedIndex(newSelectedIndex);
      } else {
        const newSelectedIndex =
          (parseInt(scrollL / this.useWidth + 1) % this.cardNum) + 1;
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

.indicator {
    display: flex;
    align-items: center;
}

.indicator-item {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #d1d6dc;
}

.nwIndicator {
    background-color: #ff7781;
}

.carousel-track.dragging {
    cursor: grab;
    scroll-behavior: auto;
    pointer-events: none;
}

.container {
    overflow-x: auto;
    white-space: nowrap;
}
</style>
