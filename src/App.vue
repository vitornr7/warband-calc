<script setup lang="ts">
import { ref } from 'vue'
import HeroCard from './components/HeroCard.vue'

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
  <div class="antialiased flex bg-black text-white p-2">
    <!-- companion list section -->
    <div class="w-50">
      <h2 class="text-center mb-4">Companions</h2>

      <ul class="flex flex-col gap-1 text-center">
        <li v-for="hero in heroes" :key="hero" class="flex">
          <!-- add companion button -->
          <div
            class="w-full border rounded-full select-none hover:bg-white hover:text-black flex align-middle justify-center hover:cursor-pointer"
            :class="selectedHeroes.includes(hero) ? 'rounded-r-none' : ''"
            @click="handleHeroSelected(hero)"
          >
            {{ hero }}
          </div>

          <!-- remove companion button -->
          <div
            v-if="selectedHeroes.includes(hero)"
            class="w-10 border border-white rounded-full rounded-l-none border-l-0 select-none hover:bg-white hover:text-black font-bold hover:cursor-pointer"
            @click="handleHeroRemove(hero)"
          >
            x
          </div>
        </li>
      </ul>
    </div>

    <!-- card section -->
    <div class="w-full p-4 border rounded-lg mx-4 flex gap-4 overflow-x-scroll">
      <HeroCard />
      <HeroCard />
      <HeroCard />
      <HeroCard />
    </div>

    <!-- party bonuses section -->
    <div class="w-50 p-4">party bonuses</div>
  </div>
</template>
