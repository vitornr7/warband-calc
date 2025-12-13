<script setup lang="ts">
import { ref } from 'vue'
import InputLevel from './components/InputLevel.vue'

const heroes = [
  'Alayen',
  'Artimenner',
  'Baheshtur',
  'Borcha',
  'Bunduk',
  'Deshavi',
  'Firentis',
  'Jeremus',
  'Katrin',
  'Klethi',
  'Lezalit',
  'Marnid',
  'Matheld',
  'Nizar',
  'Rolf',
  'Ymira',
]

const selectedHeroes = ref<string[]>([])

function handleHeroSelected(hero: string) {
  if (!selectedHeroes.value?.includes(hero)) selectedHeroes.value?.push(hero)
}

function handleHeroRemove(hero: string) {
  selectedHeroes.value = selectedHeroes.value.filter((h) => h !== hero)
}
</script>

<template>
  <div class="h-screen overflow-auto antialiased flex bg-black text-white">
    <!-- companion list section -->
    <div class="w-50 h-full p-2">
      <h2 class="text-center mb-4">Companions</h2>

      <ul class="flex flex-col gap-1 text-center">
        <li v-for="hero in heroes" :key="hero" class="flex">
          <!-- add companion button -->
          <div
            class="w-full border rounded-full select-none hover:bg-white hover:text-black flex align-middle justify-center"
            :class="selectedHeroes.includes(hero) ? 'rounded-r-none' : ''"
            @click="handleHeroSelected(hero)"
          >
            {{ hero }}
          </div>

          <!-- remove companion button -->
          <div
            v-if="selectedHeroes.includes(hero)"
            class="w-10 border border-white rounded-full rounded-l-none border-l-0 select-none hover:bg-white hover:text-black font-bold"
            @click="handleHeroRemove(hero)"
          >
            x
          </div>
        </li>
      </ul>
    </div>

    <!-- card section -->
    <div class="w-full h-full p-4 border">
      <!-- {{ selectedHeroes }} -->
      <div class="border border-blue-200 h-full w-fit p-2">
        <!-- info -->
        <h2 class="m-2 border-b border-white">Name</h2>

        <!-- stats -->
        <h2 class="m-2 border-b border-white">Status</h2>
        <InputLevel label="STR" />
        <InputLevel label="AGI" />
        <InputLevel label="INT" />
        <InputLevel label="CHA" />

        <!-- skills -->
        <h2 class="m-2 border-b border-white">Skills</h2>
        <InputLevel v-for="i in 24" :key="`skillLbl-${i}`" :label="`${i}`" />
      </div>
    </div>

    <!-- party bonuses section -->
    <div class="w-50 h-full p-4">party bonuses</div>
  </div>
</template>
