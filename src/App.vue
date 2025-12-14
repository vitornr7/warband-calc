<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import HeroCard from './components/HeroCard.vue'
import CompanionPicker from './components/CompanionPicker.vue'

const heroCardsRefs = useTemplateRef('heroCardsRefs')
const playerRef = useTemplateRef('playerRef')

const selectedHeroes = ref<string[]>([])

function handleScrollToPlayerCard() {
  playerRef.value?.$el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
}

function handleScrollToCompanionCard(hero: string) {
  if (!heroCardsRefs.value) return
  const index = selectedHeroes.value.findIndex((h) => h === hero)
  heroCardsRefs.value[index]?.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}
</script>

<template>
  <div class="flex bg-black text-white p-2 h-dvh w-full antialiased">
    <!-- companion list section -->
    <div class="w-50 overflow-y-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Companions</h2>
      <CompanionPicker
        v-model="selectedHeroes"
        @scroll-to-player-card="handleScrollToPlayerCard"
        @scroll-to-companion-card="handleScrollToCompanionCard"
      />
    </div>

    <!-- card section -->
    <div class="w-full p-4 border rounded-lg mx-4 flex gap-4 overflow-x-scroll 2xl:h-fit">
      <HeroCard name="Player" ref="playerRef" />
      <HeroCard v-for="hero in selectedHeroes" :key="hero" :name="hero" ref="heroCardsRefs" />
    </div>

    <!-- party bonuses section -->
    <div class="w-100 overflow-y-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Party Bonuses</h2>
    </div>
  </div>
</template>
