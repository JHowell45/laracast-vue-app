<template>
  <div>
    <h2>Count: {{ count }}</h2>

    <p>
      <button @click="count += 1">Increment Count</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
