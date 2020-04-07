<template>
  <form
    method="POST"
    action="/projects"
    @submit.prevent="onSubmit"
    @keydown="errors.clear($event.target.name)"
  >
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

      <span
        class="help is-danger"
        v-if="errors.has('name')"
        v-text="errors.get('name')"
      ></span>
    </div>

    <div class="control">
      <label for="description" class="label">Project Description: </label>
      <input
        type="text"
        id="description"
        name=""
        class="input"
        v-model="description"
        required
      />
    </div>

    <span
      class="help is-danger"
      v-if="errors.has('description')"
      v-text="errors.get('description')"
    ></span>

    <div class="control">
      <button class="button is-primary" :disabled="errors.any()">Create</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
// import "core-js/es6/object";

class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    delete this.errors[field];
  }

  has(field) {
    Object.prototype.hasOwnProperty.call(this.errors, field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
}

export default {
  data() {
    return {
      name: "",
      description: "",
      errors: new Errors()
    };
  },

  methods: {
    onSubmit() {
      // alert("submitting!");

      axios
        .post("/projects", this.$data)
        .then(this.onSuccess)
        .catch(error => this.errors.record(error.response.data));
    },
    onSuccess(response) {
      alert("success!");
      this.name = "";
      this.description = "";
      return response;
    }
  }
};
</script>

<style scoped></style>
