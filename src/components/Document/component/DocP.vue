<template>
    <p>
        <slot/>
    </p>
</template>

<style scoped lang="scss">

@import "@/components/styleGuide.scss";

p {
    @include Paragraph-14;
    color: $grey800;
}

</style>
