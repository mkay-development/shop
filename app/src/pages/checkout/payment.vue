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
      <div class="headline">
        <h2 class="font-bold text-lg">Payment Method</h2>
      </div>
      <div class="next">
        <button @click="next()" class="bg-gray-300 rounded-lg px-2 py-2">
          Next
          <fa icon="arrow-right" />
        </button>
      </div>
    </div>
    <div class="col-span-6">
      <div id="paypal-button-container" class="text-center mt-5 mb-5"></div>
      <div class="response">{{ response.orderId }}</div>
      <div class="response">{{ response.payerId }}</div>
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
        <button @click="next()" class="bg-gray-300 rounded-lg px-2 py-2">
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

let valid = ref(false);
let response = ref({});
let router = useRouter();

watch(response, function () {
  console.log(response);
  valid.value = true;
});

let next = function () {
  console.log(valid.value);
  if (valid.value) {
    router.push("/checkout/confirm");
  }
};

onMounted(function () {
  var script = document.createElement("script");
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
