<template>
  <form
    method="POST"
    action="/projects"
    @submit.prevent="onSubmit"
    @keydown="form.errors.clear($event.target.name)"
  >
    <div class="control">
      <label for="name" class="label">Project Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        class="input"
        v-model="form.name"
        required
      />

      <span
        class="help is-danger"
        v-if="form.errors.has('name')"
        v-text="form.errors.get('name')"
      ></span>
    </div>

    <div class="control">
      <label for="description" class="label">Project Description: </label>
      <input
        type="text"
        id="description"
        name=""
        class="input"
        v-model="form.description"
        required
      />
    </div>

    <span
      class="help is-danger"
      v-if="form.errors.has('description')"
      v-text="form.errors.get('description')"
    ></span>

    <div class="control">
      <button class="button is-primary" :disabled="form.errors.any()">
        Create
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

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
    if (field) {
      delete this.errors[field];
    } else {
      this.errors = {};
    }
  }

  has(field) {
    Object.prototype.hasOwnProperty.call(this.errors, field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }
}

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }
    this.errors = new Errors();
  }

  data() {
    let data = {};
    for (let property in this.originalData) {
      data[property] = this[property];
    }
    // let data = Object.assign({}, this);
    // delete data.originalData;
    // delete data.errors;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = "";
    }
    this.errors.clear();
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.$data)
        .then((response) => {
          this.onSuccess(response.data);

          resolve(response.data);
        })
        .catch((error) => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }

  onSuccess(data) {
    alert(data.message);

    this.reset();
  }

  onFail(errors) {
    this.errors.record(errors);
  }
}

export default {
  data() {
    return {
      form: new Form({
        name: "",
        description: "",
      }),
    };
  },

  methods: {
    onSubmit() {
      // alert("submitting!");

      // axios
      //   .post("/projects", this.$data)
      //   .then(this.onSuccess)
      //   .catch(error => this.form.errors.record(error.response.data));

      this.form
        .submit("post", "/projects")
        .then(() => alert("Handling it!"))
        .catch((errors) => console.log(errors));
    },
    onSuccess(response) {
      alert("success!");
      this.name = "";
      this.description = "";
      return response;
    },
  },
};
</script>

<style scoped></style>
