<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6">
      <div id="paypal-button-container" class="text-center mt-5 mb-5"></div>
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
        <router-link
          to="/checkout/confirm"
          class="bg-gray-300 rounded-lg px-2 py-2"
        >
          Next
          <fa icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://www.paypal.com/sdk/js?client-id=AWBerNBuxn2MlQAGvRbbxOh6xdDisk597oNihJ9faj6XGuBd_XnchIUCGpdES5r2PgBZfnUcoMMEhF_T&components=buttons";
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
        onApprove: function (data, actions) {
          console.log(data);
        },
      })
      .render("#paypal-button-container");
  }, 2500);
});
</script>
