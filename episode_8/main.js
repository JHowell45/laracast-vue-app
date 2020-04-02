Vue.component("task-list", {
  template: `
      <div>
        <task v-for='task in tasks'>
          {{ task.desc }}
        </task>
      </div>
  `,

  data() {
    return {
      tasks: [
        { desc: "Go to the store", complete: true },
        { desc: "Go to the bank", complete: false },
        { desc: "Go to work", complete: true }
      ]
    };
  }
});

Vue.component("task", {
  template: "<ul><li><slot></slot></li></ul>"
});

new Vue({
  el: "#root"
});
