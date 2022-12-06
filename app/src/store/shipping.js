import { defineStore } from 'pinia'

export const useShippingStore = defineStore('shipping', {
  state () {
    return {
      method: 'dhl',
      address: {
        firstname: '',
        lastname: '',
        street: '',
        number: '',
        postcode: '',
        city: '',
        country: ''
      }
    }
  },
  actions: {
    updateAddress: function (address) {
      this.address = address
      localStorage.setItem('shipping-address', JSON.stringify(address))
    },
    save: function () {
      localStorage.setItem('shipping', this.method)
    },
    update: function (value) {
      this.method = value
      this.save()
    },
    load: function () {
      if (localStorage.getItem('shipping-address')) {
        this.address = JSON.parse(localStorage.getItem('shipping-address'))
      } else {
        localStorage.setItem('shipping-address', JSON.stringify(this.address))
      }
      this.method = localStorage.getItem('shipping')
    }
  }
})
