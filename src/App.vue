<script setup lang="ts">
import { ref } from 'vue'

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
  <div class="bg-amber-950 text-amber-100 h-screen antialiased flex">
    <!-- companion list section -->
    <div class="w-50 h-full p-2">
      <h2 class="text-center mb-4">Companions</h2>

      <ul class="flex flex-col gap-1 text-center">
        <li v-for="hero in heroes" :key="hero" class="flex">
          <!-- add companion button -->
          <div
            class="w-full border-2 border-amber-800 rounded-full select-none bg-amber-600 hover:bg-amber-200 text-amber-100 flex align-middle justify-center"
            :class="selectedHeroes.includes(hero) ? 'rounded-r-none' : ''"
            @click="handleHeroSelected(hero)"
          >
            {{ hero }}
          </div>

          <!-- remove companion button -->
          <div
            v-if="selectedHeroes.includes(hero)"
            class="w-10 border-2 border-amber-800 rounded-full rounded-l-none border-l-0 select-none bg-amber-600 hover:bg-amber-200 font-bold text-red-500"
            @click="handleHeroRemove(hero)"
          >
            x
          </div>
        </li>
      </ul>
    </div>

    <!-- card section -->
    <div class="w-full h-full p-4 border">
      {{ selectedHeroes }}
    </div>

    <!-- party bonuses section -->
    <div class="w-50 h-full p-4">party bonuses</div>
  </div>
</template>
