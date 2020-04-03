Vue.component("coupon", {
  template: `<input>`
});

new Vue({
  el: "#root",

  methods: {
    onCouponApplied() {
      alert("Coupon applied!");
    }
  }
});
