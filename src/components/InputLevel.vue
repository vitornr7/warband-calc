<script setup lang="ts">
import ButtonLevel from './ButtonLevel.vue'

const props = defineProps<{
  label: string
  //   canUp: boolean
  //   canDown: boolean
}>()

const value = defineModel({ default: 0 })
</script>

<template>
  <div
    class="flex items-center text-sm text-center gap-2 justify-between border border-transparent hover:border-white select-none"
  >
    <!-- skill label -->
    <span>{{ props.label }}</span>

    <!-- level up input panel -->
    <div class="flex gap-0.5">
      <!-- min value button -->
      <!-- <ButtonLevel label="<" /> -->

      <!-- -1 button -->
      <ButtonLevel label="-" @click="value--" />

      <!-- type level button -->
      <input
        type="text"
        class="h-5 w-8 rounded-sm text-center focus:outline focus:outline-white"
        v-model="value"
      />

      <!-- +1 button -->
      <ButtonLevel label="+" @click="value++" />

      <!-- max value button -->
      <!-- <ButtonLevel label=">" /> -->
    </div>
  </div>
</template>
