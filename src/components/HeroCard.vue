<script setup lang="ts">
import { skills } from '@/data/consts'
import InputLevel from './InputLevel.vue'

const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="border rounded-lg w-fit p-2 text-center flex flex-col">
    <!-- info -->
    <h2 class="m-2 text-md border-b select-none">{{ props.name }}</h2>
    <InputLevel label="Level" />

    <!-- stats -->
    <h2 class="m-2 text-md border-b select-none">Status</h2>
    <InputLevel label="STR" />
    <InputLevel label="AGI" />
    <InputLevel label="INT" />
    <InputLevel label="CHA" />

    <!-- skills -->
    <h2 class="m-2 text-md border-b select-none">Skills</h2>
    <div class="overflow-y-scroll">
      <InputLevel v-for="skill in skills" :key="skill" :label="skill" />
    </div>
  </div>
</template>
