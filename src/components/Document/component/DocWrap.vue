<template>
    <main class="main">
        <slot/>
    </main>
</template>

<style scoped lang="scss">

@import "@/components/styleGuide.scss";

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $grey200;
    text-align: start;
}

</style>
