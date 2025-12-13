<script setup lang="ts">
import { ref } from 'vue'
import HeroCard from './components/HeroCard.vue'
import CompanionPicker from './components/CompanionPicker.vue'

const selectedHeroes = ref<string[]>([])
</script>

<template>
  <div class="antialiased flex bg-black text-white p-2">
    <!-- companion list section -->
    <div class="w-50">
      <h2 class="text-center mb-4 text-lg">Companions</h2>
      <CompanionPicker v-model="selectedHeroes" />
    </div>

    <!-- card section -->
    <div class="w-full p-4 border rounded-lg mx-4 flex gap-4 overflow-x-scroll">
      <HeroCard name="Player" />
      <HeroCard v-for="hero in selectedHeroes" :key="hero" :name="hero" />
    </div>

    <!-- party bonuses section -->
    <div class="w-100">
      <h2 class="text-center mb-4 text-lg">Party Bonuses</h2>
    </div>
  </div>
</template>
