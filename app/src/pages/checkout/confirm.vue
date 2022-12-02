<template>
    <div class="grid grid-cols-6">
      <div class="col-span-6 flex justify-between mt-5">
        <div class="back">
          <router-link
            to="/checkout/shipping"
            class="bg-gray-300 rounded-lg px-2 py-2"
          >
            <fa icon="arrow-left" />
            Back
          </router-link>
        </div>
        <div class="next">
          <span @click="confirm()"
            class="bg-gray-300 rounded-lg px-2 py-2"
          >
            Next
            <fa icon="arrow-right" />
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  