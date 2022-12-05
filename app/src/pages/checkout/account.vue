<template>
  <div class="grid grid-cols-6 gap-3">
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
    <div class="col-span-6 md:col-span-3">Test</div>
    <div class="col-span-6 md:col-span-3">
      <div class="account text-center" v-if="loggedin">
        <img
          src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
          alt=""
        />
        <h2>Jonathan Martz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          nesciunt quasi!
        </p>
        <div class="actions">
          <button @click="next()" class="bg-gray-300 rounded-lg px-2 py-2">
            Account verwenden
          </button>
        </div>
      </div>
      <div class="guest" v-else>Guest</div>
    </div>
    <div class="col-span-6 text-center mt-5">
      <h2 class="font-bold text-lg">Registrierung</h2>
      <p>
        Sie können sich auch einen Account anlegen und später damit bestellen.
      </p>
      <div class="actions">
        <div class="button-link mx-auto mt-3">
          <router-link to="/register" class="bg-gray-300 rounded-lg px-2 py-2">
            Account anlegen
          </router-link>
        </div>
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
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

let store = useUserStore();
let router = useRouter();

let { loggedin } = storeToRefs(store);

let valid = computed(function(){

    return true;
});

let next = function () {
  if (valid) {
    // save user
    router.push("/checkout/shipping");
  }
};
</script>
