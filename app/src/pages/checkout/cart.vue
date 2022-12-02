<template>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-4">
      <div class="grid grid-cols-12 bg-gray-300 px-2 py-2 font-bold">
        <div class="col-span-12 md:col-span-4">Id</div>
        <div class="col-span-12 md:col-span-4">Name</div>
        <div class="col-span-12 md:col-span-4">Menge</div>
      </div>
      <checkout-cart-item
        v-for="(item, index) in cart"
        :identifier="item.id"
        :qty="item.qty"
      ></checkout-cart-item>
    </div>
    <div class="col-span-6 md:col-span-2">
      <h2 class="font-bold text-lg block text-center mt-6">Zur Kasse</h2>
      <p class="block text-center">Jetzt schnell und einfach zur Kasse</p>
      <div class="actions w-full flex">
        <router-link
          to="/checkout/shipping"
          class="bg-gray-300 rounded-lg px-2 py-2 mx-auto mt-3"
          >Kasse</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCheckoutStore } from "@/store/checkout";
import CheckoutCartItem from "@/components/checkout/cart/item.vue";

const store = useCheckoutStore();

let { cart } = storeToRefs(store);
</script>
