<script setup lang="ts">
import { ref } from 'vue'
import HeroCard from './components/HeroCard.vue'
import CompanionPicker from './components/CompanionPicker.vue'

const selectedHeroes = ref<string[]>([])
</script>

<template>
  <div class="flex bg-black text-white p-2 h-dvh w-full antialiased">
    <!-- companion list section -->
    <div class="w-50 overflow-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Companions</h2>
      <CompanionPicker v-model="selectedHeroes" />
    </div>

    <!-- card section -->
    <div class="w-full p-4 border rounded-lg mx-4 flex gap-4 overflow-scroll 2xl:h-fit">
      <HeroCard name="Player" />
      <HeroCard v-for="hero in selectedHeroes" :key="hero" :name="hero" />
    </div>

    <!-- party bonuses section -->
    <div class="w-100 overflow-scroll">
      <h2 class="text-center mb-4 text-lg select-none">Party Bonuses</h2>
    </div>
  </div>
</template>
