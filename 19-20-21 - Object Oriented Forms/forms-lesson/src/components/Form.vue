<template>
  <form method="POST" action="/projects" @submit="onSubmit">
    <div class="control">
      <label for="name" class="label">Project Name: </label>
      <input type="text" id="name" name="name" class="input" v-model="name" />
    </div>

    <div class="control">
      <label for="description" class="label">Project Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        class="input"
        v-model="description"
      />
    </div>

    <div class="control">
      <button class="button-is-primary">Create</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
};
</script>

<style scoped></style>
