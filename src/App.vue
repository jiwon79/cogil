<template>
    <router-view/>
</template>

<style lang="scss">
@import "src/components/styleGuide.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: $grey200;
}

html {
    width: 100vw;
}

body {
    margin: 0 auto;
    max-width: 390px;
}
</style>
