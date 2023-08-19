<template>
  <div class="home">
    <carouselCompo> </carouselCompo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import carouselCompo from "../components/carouselCompo.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    carouselCompo,
  },
});
</script>

<style scoped lang="scss">
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
