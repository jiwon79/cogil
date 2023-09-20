<template>
    <MainHeader title="LOGO" is-logo="true"/>
    <div class="home">
        <div class="home-content-container">
            <div class="home-content">
                <h1>WEB</h1>
                <div>내용 냉용 냉용ㅇㅇ 냉용ㅇ우어</div>
            </div>
        </div>
        <div class="carousel-container">
            <carouselCompo
                    :selected-index="selectedIndex"
                    :set-selected-index="setSelectedIndex"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import carouselCompo from "../components/carouselCompo.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    carouselCompo,
    MainHeader,
  },
  data() {
    return {
      selectedIndex: 2,
    };
  },
  methods: {
    setSelectedIndex(index: number) {
      console.log('setSelectedIndex ', this.selectedIndex, index);
      this.selectedIndex = index;
    },
  },
});
</script>

<style scoped lang="scss">
.home-content-container {
  display: flex;
  width: 255px;
  height: 530px;
  padding: 20px 24px;
  margin: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;

  border-radius: 20px;
  border: 8px solid var(--grey-100, #fff);
  background: rgba(255, 234, 236, 0.6);
  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.1);
}

.home-content h1 {
  color: var(--grey-800, #1d1e1f);

  /* Heading/28 */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  text-align: left;
}

.home-content div {
  color: var(--grey-700, #3a3d41);

  /* Paragraph/18 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}

.carousel-container {
  display: flex;
  margin-top: 40px;
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
