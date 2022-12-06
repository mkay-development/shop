<template>
  <div class="app">
    <div class="w-full bg-gray-500">
      <header class="max-w-5xl py-2 mx-auto">
        <header-general></header-general>
      </header>
    </div>
    <main class="max-w-5xl min-h-screen px-2 py-2 mx-auto mt-2 bg-white">
      <messages></messages>
      <router-view></router-view>
    </main>
    <footer class="max-w-5xl px-2 py-2 mx-auto mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import messages from "./components/messages.vue";

import "./tailwind.css";
export default {
  name: "App",
  components: {
    "header-general": header,
    "footer-general": footer,
    "messages": messages,
  },
  watch: {
    $route: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
