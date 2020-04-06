Vue.component("task", {
  template: "<ul><li><slot></slot></li></ul>"
});

new Vue({
  el: "#root"
});
