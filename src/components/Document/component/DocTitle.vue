<template>
    <p>
        <slot/>
    </p>
</template>

<style scoped lang="scss">

@import "@/components/styleGuide.scss";

p {
    @include Heading-24;
    color: $grey800;
}

</style>
