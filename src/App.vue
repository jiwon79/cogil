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
    height: 100%;
    display: flex;
    flex-direction: column;
}

html {
    width: 100vw;
    height: 100%;
}

body {
    margin: 0 auto;
    max-width: 390px;
    height: 100%;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}

p, span, h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
</style>
