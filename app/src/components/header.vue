<template>
  <div class="vc-header flex justify-between mt-2">
    <span
      ><router-link to="/" class="font-bold text-white text-xl ml-2"
        >Shop - MD</router-link
      ></span
    >
    <div class="navigation">
      {{ loggedin }}
      <nav class="mt-2">
        <router-link v-if="!loggedin" to="/login"
          ><fa icon="user"
        /></router-link>
        <router-link v-else to="/logout" @click="logout()"
          ><fa icon="right-from-bracket"
        /></router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

let store = useUserStore();

let { token, loggedin } = storeToRefs(store);

let logout = function () {
  store.logout();
};

let login = function () {
  router.push("/login");
};

onMounted(function () {
  store.check();
});
</script>
