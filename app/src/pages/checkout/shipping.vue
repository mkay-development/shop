<template>
  <div class="grid grid-cols-6 gap-3 mt-5 mb-5">
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
      <div class="headline text-center">
        <h2 class="font-bold text-lg">Shipping Method</h2>
      </div>
      <div class="next">
        <button @click="next()" class="bg-gray-300 rounded-lg px-2 py-2">
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
    <div class="col-span-6">
      <h2 class="font-bold text-lg">Versandart</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aut
        unde, voluptate fugiat adipisci dolorum numquam eaque, dolorem aperiam
        rerum deleniti magnam tempora odit necessitatibus ducimus voluptatum
        incidunt nemo ex!
      </p>
    </div>

    <div class="col-span-6 md:col-span-4">
      <div class="grid grid-cols-6">
        <div class="col-span-6 md:col-span-3 w-full text-center">
          <div class="px-2 py-2 w-full h-full bg-gray-300 mt-4">
            <fa :icon="['fab', 'dhl']" class="fa-5x" />
            <h2>DHL</h2>
            <input
              type="radio"
              name="shipping-method"
              :checked="method == 'dhl'"
              @click="method = 'dhl'"
            />
          </div>
        </div>
        <div class="col-span-6 md:col-span-3 w-full text-center">
          <div class="px-2 py-2 w-full h-full bg-gray-300 mt-4">
            <fa :icon="['fab', 'dhl']" class="fa-5x" />
            <h2>DHL Express</h2>
            <input
              type="radio"
              name="shipping-method"
              @click="method = 'dhl-express'"
              :checked="method == 'dhl-express'"
            />
            <p>Preis: 10€</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-6 md:col-span-2 mt-4">
      <div class="form-group">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Vorname</label
        >
        <input
          type="text"
          v-model="address.firstname"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Nachname</label
        >
        <input
          type="text"
          v-model="address.lastname"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Straße</label
        >
        <input
          type="text"
          v-model="address.street"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Nummer</label
        >
        <input
          type="text"
          v-model="address.number"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">PLZ</label>
        <input
          type="text"
          v-model="address.postcode"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Stadt</label
        >
        <input
          type="text"
          v-model="address.city"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Land</label
        >
        <input
          type="text"
          v-model="address.country"
          class="w-full px-2 py-2 bg-gray-200"
          id=""
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
        <button @click="next()" class="bg-gray-300 rounded-lg px-2 py-2">
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { useShippingStore } from "@/store/shipping";
import { storeToRefs } from "pinia";

let router = useRouter();
let shippingStore = useShippingStore();
let { method, address } = storeToRefs(shippingStore);
let valid = ref(false);

watch(
  address,
  function (value) {
    shippingStore.updateAddress(value);
  },
  { deep: true }
);

watch(method, function () {
  valid.value = true;
  shippingStore.update(method);
});

let next = function () {
  if (valid.value) {
    router.push("/checkout/payment");
  } else {
    console.log("shipping invalid");
  }
};

onMounted(function () {
  shippingStore.load();
});
</script>
