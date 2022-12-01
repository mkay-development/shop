<template>
  <div class="vp-home">
    <div v-for="(item, index) in [1, 2, 3]">
      <categories-preview :identifier="item" :items="3"></categories-preview>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import categoriesPreview from "../components/categories/preview.vue";
</script>
