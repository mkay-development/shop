<template>
  <div class="grid grid-cols-6 gap-3 mt-5 mb-5">
    <div class="col-span-6 flex justify-between mt-5">
      <div class="back">
        <router-link
          to="/checkout/account"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          <fa icon="arrow-left" />
          Back
        </router-link>
      </div>
      <div class="headline text-center">
        <h2 class="font-bold text-lg">
          Shipping Method
        </h2>
      </div>
      <div class="next">
        <button
          class="bg-gray-300 rounded-lg px-2 py-2"
          @click="next()"
        >
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
    <div class="col-span-6">
      <h2 class="font-bold text-lg">
        Versandart
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aut
        unde, voluptate fugiat adipisci dolorum numquam eaque, dolorem aperiam
        rerum deleniti magnam tempora odit necessitatibus ducimus voluptatum
        incidunt nemo ex!
      </p>
    </div>

    <div class="col-span-6 md:col-span-2">
      <h2 class="font-bold text-lg mb-2">
        Versandmethode
      </h2>
      <div
        v-if="address"
        class="grid grid-cols-6 gap-3"
      >
        <div class="col-span-6 w-full text-center">
          <div class="px-2 py-2 w-full h-full bg-gray-300">
            <fa
              :icon="['fab', 'dhl']"
              class="fa-5x"
            />
            <h2>DHL</h2>
            <p class="font-bold">
              Preis: 5€
            </p>
            <input
              type="radio"
              name="shipping-method"
              :checked="method == 'dhl'"
              @click="method = 'dhl'"
            >
          </div>
        </div>
        <div class="col-span-6 w-full text-center">
          <div class="px-2 py-2 w-full h-full bg-gray-300 mt-2">
            <fa
              :icon="['fab', 'dhl']"
              class="fa-5x"
            />
            <h2>DHL Express</h2>
            <p class="font-bold">
              Preis: 10€
            </p>
            <input
              type="radio"
              name="shipping-method"
              :checked="method == 'dhl-express'"
              @click="method = 'dhl-express'"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-6 md:col-span-2">
      <h2 class="font-bold text-lg mb-3">
        Versandadresse
      </h2>
      <div class="form-group">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Anrede</label>
        <select
          v-model="address.surename"
          class="w-full px-2 py-2 bg-gray-200"
        >
          <option value="woman">
            Frau
          </option>
          <option value="man">
            Mann
          </option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Vorname</label>
        <input
          id=""
          v-model="address.firstname"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Nachname</label>
        <input
          id=""
          v-model="address.lastname"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Straße</label>
        <input
          id=""
          v-model="address.street"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
    </div>
    <div class="col-span-6 md:col-span-2 mt-0 md:mt-6">
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Nummer</label>
        <input
          id=""
          v-model="address.number"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">PLZ</label>
        <input
          id=""
          v-model="address.postcode"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Stadt</label>
        <input
          id=""
          v-model="address.city"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        >
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">Land</label>
        <select
          v-model="address.country"
          class="w-full px-2 py-2 bg-gray-200"
        >
          <option value="de">
            Deutschland
          </option>
        </select>
      </div>
    </div>
    <div class="col-span-6 flex justify-between mt-5">
      <div class="back">
        <router-link
          to="/checkout/account"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          <fa icon="arrow-left" />
          Back
        </router-link>
      </div>
      <div class="next">
        <button
          class="bg-gray-300 rounded-lg px-2 py-2"
          @click="next()"
        >
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { useShippingStore } from '@/store/shipping'
import { storeToRefs } from 'pinia'

const router = useRouter()
const shippingStore = useShippingStore()
const { method, address } = storeToRefs(shippingStore)
const valid = ref(false)

watch(
  address,
  function (value) {
    shippingStore.updateAddress(value)
  },
  { deep: true }
)

watch(method, function () {
  valid.value = true
  shippingStore.update(method)
})

const next = function () {
  if (valid.value) {
    router.push('/checkout/payment')
  } else {
    console.log('shipping invalid')
  }
}

onMounted(function () {
  shippingStore.load()

  if (method != '') {
    valid.value = true
  }
})
</script>
