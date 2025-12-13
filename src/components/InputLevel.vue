<script setup lang="ts">
import ButtonLevel from './ButtonLevel.vue'

const props = defineProps<{
  label: string
}>()

const value = defineModel({ default: 0 })
</script>

<template>
  <div class="flex items-center text-center gap-10 justify-between">
    <!-- skill label -->
    <span>{{ props.label }}</span>

    <!-- level up input panel -->
    <div class="flex gap-1">
      <!-- min value button -->
      <!-- <ButtonLevel label="<" /> -->

      <!-- -1 button -->
      <ButtonLevel label="-" />

      <!-- type level button -->
      <input type="text" class="border h-5 w-10 rounded-sm text-center" v-model="value" />

      <!-- +1 button -->
      <ButtonLevel label="+" />

      <!-- max value button -->
      <!-- <ButtonLevel label=">" /> -->
    </div>
  </div>
</template>
