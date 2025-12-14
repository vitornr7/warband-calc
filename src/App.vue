<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue'
import HeroCard from './components/HeroCard.vue'
import CompanionPicker from './components/CompanionPicker.vue'
import heroesData from './data/hero_defaults.json'
import type { Hero } from './types/Hero.types'

const heroCardsRefs = useTemplateRef('heroCardsRefs')

const heroes = reactive<Hero[]>(JSON.parse(JSON.stringify(heroesData)))
const selectedHeroes = ref<string[]>(['Player'])

const blink = ref('')

let timeout: number | undefined

function handleScrollToHeroCard(hero: string) {
  clearTimeout(timeout)

  if (!heroCardsRefs.value) return

  const index = selectedHeroes.value.findIndex((h) => h === hero)

  heroCardsRefs.value[index]?.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })

  blink.value = hero
  timeout = setTimeout(() => (blink.value = ''), 2100)
}

function findHero(heroName: string): number {
  const heroIdx = heroes.findIndex((hero) => hero.name === heroName)

  if (heroIdx < 0) throw new Error("Hero not found, this wans't supposed to happen...")

  return heroIdx
}
</script>

<template>
  <div class="flex bg-black text-white p-2 h-dvh w-full antialiased">
    <!-- companion list section -->
    <div class="w-50 overflow-y-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Companions</h2>

      <CompanionPicker
        v-model="selectedHeroes"
        @scroll-to-companion-card="handleScrollToHeroCard"
      />
    </div>

    <!-- card section -->
    <div class="w-full p-4 border rounded-lg mx-4 flex gap-4 overflow-x-scroll 2xl:h-fit">
      <HeroCard
        v-for="heroName in selectedHeroes"
        :key="heroName"
        ref="heroCardsRefs"
        :class="blink === heroName ? 'animate-pulse' : ''"
        v-model="heroes[findHero(heroName)]!"
      />
    </div>

    <!-- party bonuses section -->
    <div class="w-100 overflow-y-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Party Bonuses</h2>
    </div>
  </div>
</template>
