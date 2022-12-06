<template>
  <section class="card px-2 py-2 bg-gray-300 border border-black">
    <img
      src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
      alt=""
    >
    <h2 class="font-bold mt-2">
      {{ product.name }}
    </h2>
    <p class="text-sm">
      {{ product.desc }}
    </p>
    <div class="actions flex justify-between mt-3">
      <button
        class="bg-gray-200 rounded-lg px-2 py-2"
        @click="add(product.id, { qty: 1, price: product.price })"
      >
        add to Cart
      </button>
      <span class="price px-2 py-2 text-red-600">12 €</span>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCheckoutStore } from '@/store/checkout'

const checkoutStore = useCheckoutStore()

const props = defineProps({
  identifier: {
    type: Number,
    required: true
  }
})

const product = ref({})

onMounted(() => {
  load()
})

const add = function (id, { qty, price }) {
  checkoutStore.add({
    id,
    qty,
    price
  })
  checkoutStore.save()
}

const load = function () {
  const that = this
  fetch('https://backend.mkay-development.de/api/product/' + props.identifier, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      product.value = data.item
    })
}
</script>
