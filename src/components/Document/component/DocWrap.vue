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
    gap: 8px;

    width: 100%;
    padding: 16px 20px;
    box-sizing: border-box;
    text-align: start;
    background-color: $grey200;
}

</style>
