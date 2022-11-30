import { defineStore } from "pinia";

export const useNavStore = defineStore("url", {
  state() {
    return {
      baseurl: "http://www.vite-shop.de",
    };
  },
  actions: {},
});
