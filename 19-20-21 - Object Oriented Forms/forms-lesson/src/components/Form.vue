<template>
  <form method="POST" action="/projects" @submit.prevent="onSubmit">
    <div class="control">
      <label for="name" class="label">Project Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        class="input"
        v-model="name"
        required
      />

      <span class="help is-danger" v-text="errors.get('name')"></span>
    </div>

    <div class="control">
      <label for="description" class="label">Project Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        class="input"
        v-model="description"
        required
      />
    </div>

    <div class="control">
      <button class="button is-primary">Create</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      description: "",
      errors: {},
    };
  },

  methods: {
    onSubmit() {
      // alert("submitting!");

      axios
        .post("/projects", this.$data)
        .then((response) => {
          alert("success!");
          return response;
        })
        .catch((error) => (this.errors = error.response.data));
    },
  },
};
</script>

<style scoped></style>
