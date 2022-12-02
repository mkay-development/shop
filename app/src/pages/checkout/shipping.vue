<template>
  <div class="grid grid-cols-6 gap-3 mt-5 mb-5">
    <div class="col-span-6">
      <h2 class="font-bold text-lg">Versandart</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aut
        unde, voluptate fugiat adipisci dolorum numquam eaque, dolorem aperiam
        rerum deleniti magnam tempora odit necessitatibus ducimus voluptatum
        incidunt nemo ex!
      </p>
      <p>
        {{ radio }}
      </p>
    </div>
    <div class="col-span-6 md:col-span-2 w-full text-center">
      <div class="px-2 py-2 w-full h-full bg-gray-300 mt-4">
        <fa :icon="['fab', 'dhl']" class="fa-5x" />
        <h2>DHL</h2>
        <input type="radio" name="shipping-method" @click="radio = 'dhl'" />
      </div>
    </div>
    <div class="col-span-6 md:col-span-2 w-full text-center">
      <div class="px-2 py-2 w-full h-full bg-gray-300 mt-4">
        <fa :icon="['fab', 'dhl']" class="fa-5x" />
        <h2>DHL Express</h2>
        <input
          type="radio"
          name="shipping-method"
          @click="radio = 'dhl-express'"
        />
      </div>
    </div>
    <div class="col-span-6 flex justify-between mt-5">
      <div class="back">
        <router-link
          to="/checkout/cart"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          <fa icon="arrow-left" />
          Back
        </router-link>
      </div>
      <div class="next">
        <router-link
          to="/checkout/payment"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          Next
          <fa icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let radio = ref("");
</script>
