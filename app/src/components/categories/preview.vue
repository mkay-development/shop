<template>
  <div>
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-6">
        <h2 class="font-bold text-lg mt-3">
          Katgorie: {{ category.name }}
        </h2>
        <p>{{ category.desc }}</p>
      </div>
      <div
        v-for="(item, index) in products"
        class="col-span-6 md:col-span-2"
      >
        <product-card :identifier="item.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import productCard from '@/components/product/card.vue'

const props = defineProps({
  items: {
    type: Number,
    required: true
  },
  identifier: {
    type: Number,
    required: true
  }
})

const items = ref([])
const products = ref([])
const category = ref([])

onMounted(function () {
  load()
})

const load = function () {
  const that = this
  fetch(
    'https://backend.mkay-development.de/api/category/' + props.identifier,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer: ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      category.value = data.item
      products.value = data.item.products
    })
}
</script>
