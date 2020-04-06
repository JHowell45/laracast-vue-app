<template>
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>


<script>
export default {};
</script>

<style>
.box {
  background: #c5c5c5;
  padding: 10px;
  border: 1px solid grey;
  margin-bottom: 10px;
}
</style>