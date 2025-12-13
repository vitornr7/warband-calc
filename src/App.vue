<script setup lang="ts">
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
</script>

<template>
  <div class="bg-amber-500 h-screen antialiased flex">
    <div class="w-50 h-full border border-green-500">
      <h2 class="border border-b-amber-200 text-center mb-6">Companions</h2>

      <ul class="list-none flex flex-col gap-1 justify-center text-center">
        <li
          v-for="hero in heroes"
          :key="hero"
          class="border rounded-full select-none bg-amber-600 hover:bg-amber-800"
        >
          {{ hero }}
        </li>
      </ul>
    </div>

    <div class="w-full h-full border border-blue-500 p-4">hero cards</div>

    <div class="w-50 h-full border border-red-500 p-4">party bonuses</div>
  </div>
</template>
