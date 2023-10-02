<template>
    <li>
        <slot/>
    </li>
</template>

<style scoped lang="scss">

@import "@/components/styleGuide.scss";

li {
    @include Paragraph-14;
    color: $grey800;
}

</style>
