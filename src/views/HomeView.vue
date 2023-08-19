<template>
    <MainHeader title="LOGO" is-logo="true"/>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png"/>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainHeader,
    HelloWorld,
  },
});
</script>
