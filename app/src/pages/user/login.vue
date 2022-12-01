<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3">
        <div class="form-group">
          <label class="block text-sm px-2 py-2 bg-gray-300 font-bold"
            >Email</label
          >
          <input
            type="text"
            class="w-full px-2 py-2 bg-gray-200"
            v-model="email"
          />
        </div>
        <div class="form-group mt-3">
          <label class="block text-sm px-2 py-2 bg-gray-300 font-bold"
            >Password</label
          >
          <input
            type="password"
            class="w-full px-2 py-2 bg-gray-200"
            v-model="password"
          />
        </div>
        <div class="form-group mt-3">
          <button class="w-full bg-gray-300 px-2 py-2" @click="login()">abschicken</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../../store/user";
import { ref } from "vue";
let email = ref("");
let password = ref("");
let store = useUserStore();

let login = function(){
  store.login(email.value,password.value);
}
</script>
