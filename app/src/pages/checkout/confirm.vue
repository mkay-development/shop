<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6 flex justify-between mt-5">
      <div class="back">
        <router-link
          to="/checkout/payment"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          <fa icon="arrow-left" />
          Back
        </router-link>
      </div>
      <div class="headline text-center">
        <h2 class="font-bold text-lg">
          Confirm
        </h2>
      </div>
      <div class="next">
        <span
          class="bg-gray-300 rounded-lg px-2 py-2"
          @click="confirm()"
        >
          Confirm
          <fa icon="arrow-right" />
        </span>
      </div>
    </div>
    <div class="col-span-6 flex justify-between mt-5">
      <div class="back">
        <router-link
          to="/checkout/payment"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          <fa icon="arrow-left" />
          Back
        </router-link>
      </div>
      <div class="next">
        <span
          class="bg-gray-300 rounded-lg px-2 py-2"
          @click="confirm()"
        >
          Confirm
          <fa icon="arrow-right" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>
