<template>
    <a :href="props.link">
        <p>{{ props.text}}</p>
    </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
})
</script>
