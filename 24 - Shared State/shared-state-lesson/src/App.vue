<template>
  <div id="app"><Base />></div>
</template>

<script>
import Base from "./components/Base.vue";


export default {
  let source = {
  user: {
    name: "john doe"
  }
};

  name: "App",
  data: source,
  components: {
    Base
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
