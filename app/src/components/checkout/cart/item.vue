<template>
  <div>
    <div class="grid grid-cols-12 bg-gray-200 px-2 py-2">
      <div class="col-span-12 md:col-span-4">{{ product.id }}</div>
      <div class="col-span-12 md:col-span-4">{{ product.name }}</div>
      <div class="col-span-12 md:col-span-4 flex space-x-3">
        <fa icon="minus" @click="add(product.id, -1)" /><span class="qty">{{
          props.qty
        }}</span>
        <fa icon="plus" @click="add(product.id, 1)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCheckoutStore } from "@/store/checkout";

const store = useCheckoutStore();

const props = defineProps({
  identifier: {
    required: true,
    type: Number,
  },
  qty: {
    required: true,
    type: Number,
  },
});

let product = ref({});

let load = function () {
  let that = this;
  fetch("https://backend.mkay-development.de/api/product/" + props.identifier, {
    method: "GET",
    headers: {
      Authorization: "Bearer: " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      product.value = data.item;
    });
};

let add = function (id, qty) {
  store.add({ id, qty });
};

onMounted(function () {
  load();
});
</script>
