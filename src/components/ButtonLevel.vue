<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="border w-5 h-5 rounded-sm select-none text-sm flex items-center justify-center hover:bg-white hover:text-black hover:cursor-pointer"
    >{{ props.label }}</span
  >
</template>
