<script setup lang="ts">
import { skillLabels } from '@/data/consts'
import InputLevel from './InputLevel.vue'
import type { Hero } from '@/types/Hero.types'

const hero = defineModel<Hero>({ required: true })
</script>

<template>
  <div class="border rounded-lg w-fit min-w-fit p-2 text-center flex flex-col">
    <!-- info -->
    <h2 class="m-2 text-md border-b select-none">{{ hero.name }}</h2>
    <InputLevel label="Level" v-model="hero.level" />

    <!-- stats -->
    <h2 class="m-2 text-md border-b select-none">Status</h2>
    <InputLevel label="STR" v-model="hero.attributes.str" />
    <InputLevel label="AGI" v-model="hero.attributes.agi" />
    <InputLevel label="INT" v-model="hero.attributes.int" />
    <InputLevel label="CHA" v-model="hero.attributes.cha" />

    <!-- skills -->
    <h2 class="m-2 text-md border-b select-none">Skills</h2>
    <div class="overflow-y-scroll">
      <InputLevel
        v-for="(skillLabel, i) in skillLabels"
        :key="skillLabel"
        :label="skillLabel"
        v-model="hero.skills[Object.keys(hero.skills)[i]]"
      />
    </div>
  </div>
</template>
