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
        <button
          class="bg-gray-300 rounded-lg px-2 py-2"
          @click="next()"
        >
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
    <div class="col-span-6 md:col-span-3">
      <h2 class="font-bold text-lg block text-center">
        Als Gast bestellen
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nobis
        suscipit. Voluptate voluptatum debitis itaque reprehenderit unde,
        similique corrupti omnis laudantium dolores quibusdam error suscipit
        consectetur blanditiis ducimus consequatur necessitatibus.
      </p>
      <div class="skills mt-5">
        <div class="grid grid-cols-6 text-center gap-3">
          <div class="col-span-6 md:col-span-2">
            <h2 class="font-bold">
              Sicher
            </h2>
            <fa
              icon="lock"
              class="fa-3x mt-3"
            />
          </div>
          <div class="col-span-6 md:col-span-2">
            <h2 class="font-bold">
              Schnell
            </h2>
            <fa
              icon="truck-fast"
              class="fa-3x mt-3"
            />
          </div>
          <div class="col-span-6 md:col-span-2">
            <h2 class="font-bold">
              Einfach
            </h2>
            <fa
              icon="check"
              class="fa-3x mt-3"
            />
          </div>
        </div>
      </div>
      <div class="actions flex justify-between mt-5">
        <div class="left" />
        <div class="right">
          <button class="bg-gray-300 px-2 py-2 block rounded-lg">
            weiter <fa icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-6 md:col-span-3">
      <div
        v-if="loggedin"
        class="account text-center"
      >
        <img
          src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
          alt=""
        >
        <h2>Jonathan Martz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          nesciunt quasi!
        </p>
        <div class="actions">
          <button
            class="bg-gray-300 rounded-lg px-2 py-2"
            @click="next()"
          >
            Account verwenden
          </button>
        </div>
      </div>
      <div
        v-else
        class="guest"
      >
        <h2 class="w-full text-center font-bold text-lg mb-2">
          Login
        </h2>
        <div class="form-group">
          <label class="text-sm font-bold bg-gray-300 px-2 py-2 block">Email</label>
          <input
            v-model="email"
            class="bg-gray-200 w-full px-2 py-2"
            type="email"
            placeholder="Email"
          >
        </div>
        <div class="form-group mt-3">
          <label class="text-sm font-bold bg-gray-300 px-2 py-2 block">Password</label>
          <input
            v-model="password"
            class="bg-gray-200 w-full px-2 py-2"
            type="password"
            placeholder="Password"
          >
        </div>
        <div class="actions flex justify-between mt-2">
          <button class="bg-gray-300 text-sm px-2 py-2 rounded-lg">
            Password vergessen
          </button>
          <button
            class="bg-gray-300 px-2 py-2 rounded-lg"
            @click="login()"
          >
            Einloggen
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-6 text-center mt-5">
      <h2 class="font-bold text-lg">
        Registrierung
      </h2>
      <p>
        Sie können sich auch einen Account anlegen und später damit bestellen.
      </p>
      <div class="actions">
        <div class="button-link mx-auto mt-3">
          <router-link
            to="/register"
            class="bg-gray-300 rounded-lg px-2 py-2"
          >
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
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const { loggedin } = storeToRefs(store)

const valid = computed(function () {
  return true
})

const next = function () {
  if (valid.value) {
    // save user
    router.push('/checkout/shipping')
  }
}

const login = function () {
  store.login(email.value, password.value)
}
</script>
