<template>
  <form method="POST" action="">
    <div class="control">
      <label for="name" class="label">Project Name: </label>
      <input type="text" id="name" name="name" class="input" />
    </div>

    <div class="control">
      <label for="description" class="label">Project Description: </label>
      <input type="text" id="description" name="description" class="input" />
    </div>

    <div class="control">
      <button class="button-is-primary">Create</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped></style>
