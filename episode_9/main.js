Vue.component("message", {
  props: ["title", "body"],

  template: `

    <article class="message">
        <div class="message-header">
          {{ title }}
          <button class="delete" aria-label="delete" @click="hideModal"></button>
        </div>
        <div class="message-body">
          
        {{ body }}

        </div>
      </article>

  `,

  methods: {
    hideModal() {
      $(".message").hide;
    }
  }
});

new Vue({
  el: "#root"
});
