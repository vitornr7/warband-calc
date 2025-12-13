<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <span class="border w-5 h-5 rounded-sm select-none text-sm flex items-center justify-center">{{
    props.label
  }}</span>
</template>
