<template>
  <div class="vp-home">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-2">
        <h2 class="block text-center font-bold text-lg md:mt-12">
          Herzliche Willkommen
        </h2>
        <p class="block text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          adipisci sunt, ullam quam asperiores ipsa facere delectus inventore.
          Incidunt adipisci sunt, ullam quam asperiores ipsa facere delectus
          inventore.
        </p>
        <h2 class="font-bold mt-6 block text-center">Öffnungszeiten</h2>
        <p class="block text-center text-sm">Mo-Fr: 9 - 17 Uhr</p>
        <p class="block text-center text-sm">Sa: 9 - 13 Uhr</p>
      </div>
      <div class="col-span-6 md:col-span-4 md:mb-12 md:mt-3 text-center">
        <div class="grid grid-cols-6">
          <div class="col-span-6 md:col-span-6 md:mb-6 gap-2">
            <h2 class="font-bold text-lg">Unser Geschäft</h2>
            <img
              src="https://via.placeholder.com/600x150.png?text=MkaY+Development"
              class="mx-auto"
              alt=""
            />
          </div>
          <div class="col-span-6 md:col-span-3">
            <h2 class="font-bold text-lg block">Telefon</h2>
            <p class="block">02261 / 12345</p>
            <div class="actions w-full">
              <button
                class="bg-gray-300 px-2 py-2 block rounded-lg mx-auto mt-3"
              >
                Anrufen
              </button>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <h2 class="font-bold text-lg block">Whatspp</h2>
            <p class="block">0174 / 123456789</p>
            <div class="actions w-full">
              <button
                class="bg-gray-300 px-2 py-2 block rounded-lg mx-auto mt-3"
              >
                Nachricht schicken
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in [1, 2]">
      <categories-preview :identifier="item" :items="3"></categories-preview>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import categoriesPreview from "../components/categories/preview.vue";
</script>
