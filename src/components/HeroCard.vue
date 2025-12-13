<script setup lang="ts">
import InputLevel from './InputLevel.vue'

const skills = [
  'ironflesh',
  'power_strike',
  'power_throw',
  'power_draw',
  'weapon_master',
  'shield',
  'athletics',
  'riding',
  'horse_archery',
  'looting',
  'trainer',
  'tracking',
  'tactics',
  'path_finding',
  'spotting',
  'inventory_management',
  'wound_treatment',
  'surgery',
  'first_aid',
  'engineer',
  'persuasion',
  'prisoner_management',
  'leadership',
  'trade',
]
</script>

<template>
  <div class="border rounded-lg h-full w-fit p-2 text-center">
    <!-- info -->
    <h2 class="m-2 border-b border-white">Alayen</h2>
    <InputLevel label="Level" />

    <!-- stats -->
    <h2 class="m-2 border-b border-white">Status</h2>
    <InputLevel label="STR" />
    <InputLevel label="AGI" />
    <InputLevel label="INT" />
    <InputLevel label="CHA" />

    <!-- skills -->
    <h2 class="m-2 border-b border-white">Skills</h2>
    <InputLevel v-for="skill in skills" :key="skill" :label="skill" />
  </div>
</template>
