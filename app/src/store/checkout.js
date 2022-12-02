import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("checkout", {
  state() {
    return {
      cart: [],
      qty: 0,
    };
  },
  actions: {
    add: function (item) {
      let found = false;

      for (let i = 0; i < this.cart.length; i++) {
        if (item.id == this.cart[i].id) {
          found = true;
          this.cart[i].qty += item.qty;
        }
      }

      if (!found) {
        this.cart.push(item);
      }
      this.qty += item.qty;
      this.save();
    },
    save: function () {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    load: function () {
      let cart = JSON.parse(localStorage.getItem("cart"));

      if (cart == null) {
        cart = [];
      }

      if (cart.length != 0) {
        this.cart = cart;
      } else {
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify([]));
      }

      for (let i = 0; i < cart.length; i++) {
        this.qty += cart[i].qty;
      }
    },
  },
});
