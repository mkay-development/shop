<template>
  <div class="grid grid-cols-6 gap-3">
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
      <div class="headline">
        <h2 class="font-bold text-lg">Payment Method</h2>
      </div>
      <div class="next">
        <button class="bg-gray-300 rounded-lg px-2 py-2" @click="next()">
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
    <div class="col-span-6 md:col-span-3">
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Anrede</label
        >
        <select v-model="address.surename" class="w-full px-2 py-2 bg-gray-200">
          <option value="woman">Frau</option>
          <option value="man">Mann</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Vorname</label
        >
        <input
          id=""
          v-model="address.firstname"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Nachname</label
        >
        <input
          id=""
          v-model="address.lastname"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Straße</label
        >
        <input
          id=""
          v-model="address.street"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
    </div>
    <div class="col-span-6 md:col-span-3">
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Nummer</label
        >
        <input
          id=""
          v-model="address.number"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >City</label
        >
        <input
          id=""
          v-model="address.city"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300">PLZ</label>
        <input
          id=""
          v-model="address.postcode"
          type="text"
          class="w-full px-2 py-2 bg-gray-200"
        />
      </div>
      <div class="form-group mt-3">
        <label class="text-sm font-bold block px-2 py-2 bg-gray-300"
          >Land</label
        >
        <select v-model="address.country" class="w-full px-2 py-2 bg-gray-200">
          <option value="de">Germany</option>
        </select>
      </div>
    </div>
    <div class="col-span-6">
      <div id="paypal-button-container" class="text-center mt-5 mb-5" />
      <div class="response">
        {{ response.orderId }}
      </div>
      <div class="response">
        {{ response.payerId }}
      </div>
    </div>
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
        <button class="bg-gray-300 rounded-lg px-2 py-2" @click="next()">
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const valid = ref(false);
const response = ref({});
const router = useRouter();
const address = ref({
  firstname: "",
  lastname: "",
  surename: "",
  street: "",
  number: "",
  city: "",
  postcode: "",
  country: "",
});

watch(response, function () {
  valid.value = true;
});

const next = function () {
  console.log(valid.value);
  if (valid.value) {
    router.push("/checkout/confirm");
  }
};

onMounted(function () {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://www.paypal.com/sdk/js?client-id=AWBerNBuxn2MlQAGvRbbxOh6xdDisk597oNihJ9faj6XGuBd_XnchIUCGpdES5r2PgBZfnUcoMMEhF_T&components=buttons&locale=de_DE&currency=EUR";
  document.head.appendChild(script);

  setTimeout(function () {
    paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10",
                },
                currency: "EUR",
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          response.value = data;
        },
      })
      .render("#paypal-button-container");
  }, 2500);
});
</script>
