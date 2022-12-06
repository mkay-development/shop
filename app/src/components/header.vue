<template>
  <div class="vc-header flex justify-between mt-3">
    <span><router-link
      to="/"
      class="font-bold text-white text-xl ml-2"
    >Shop - MD</router-link></span>
    <div class="navigation flex space-x-3">
      <div class="cart px-2 py-2 bg-gray-300">
        <router-link to="/checkout/cart">
          <fa icon="shopping-cart" />
        </router-link>
        <span class="qty">{{ qty }}</span>
      </div>
      <nav class="flex">
        <router-link
          v-if="!loggedin"
          to="/login"
          class="bg-gray-300 px-2 py-2"
        >
          <fa icon="user" />
        </router-link>
        <router-link
          v-else
          to="/logout"
          class="bg-gray-300 px-2 py-2"
          @click="logout()"
        >
          <fa icon="right-from-bracket" />
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useUserStore } from '../store/user'
import { useCheckoutStore } from '../store/checkout'
import { useRouter } from 'vue-router'

const store = useUserStore()
const checkoutStore = useCheckoutStore()

const { token, loggedin } = storeToRefs(store)
const { qty, cart } = storeToRefs(checkoutStore)

const logout = function () {
  store.logout()
}

const login = function () {
  router.push('/login')
}

onMounted(function () {
  store.check()
  checkoutStore.load()
})
</script>
