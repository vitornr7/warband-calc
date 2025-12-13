<script setup lang="ts">
import { heroes } from '@/data/consts'

const model = defineModel<string[]>()

function handleHeroSelected(hero: string) {
  if (!model.value) return

  if (!model.value.includes(hero)) model.value?.push(hero)
}

function handleHeroRemove(hero: string) {
  if (!model.value) return

  model.value = model.value.filter((h) => h !== hero)
}
</script>

<template>
  <ul class="flex flex-col gap-1 text-center">
    <li v-for="hero in heroes" :key="hero" class="flex">
      <!-- add companion button -->
      <div
        class="w-full border rounded-full select-none hover:bg-white hover:text-black flex align-middle justify-center hover:cursor-pointer"
        :class="model?.includes(hero) ? 'rounded-r-none font-bold' : ''"
        @click="handleHeroSelected(hero)"
      >
        {{ hero }}
      </div>

      <!-- remove companion button -->
      <div
        v-if="model?.includes(hero)"
        class="w-10 border border-white rounded-full rounded-l-none border-l-0 select-none hover:bg-white hover:text-black font-bold hover:cursor-pointer"
        @click="handleHeroRemove(hero)"
      >
        x
      </div>
    </li>
  </ul>
</template>
