<template>
  <section class="card px-2 py-2 bg-gray-300 border border-black">
    <img
      src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
      alt=""
    />
    <h2>{{ props.identifier }}</h2>
    <h2>{{ product }}</h2>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let props = defineProps({
  identifier: {
    type: Number,
    required: true,
  },
});

let product = ref({});

onMounted(() => {
  load();
});

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
</script>
