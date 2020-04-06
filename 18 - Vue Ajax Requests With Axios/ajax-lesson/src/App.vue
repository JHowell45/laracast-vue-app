<template>
  <div id="app">
    <p>Character name: {{ character.name }}</p>
    <p>Character height: {{ character.height }}</p>
    <p>Character mass: {{ character.mass }}</p>
    <p>Character hair colour: {{ character.hair_color }}</p>
    <p>Character skin colour: {{ character.skin_color }}</p>
    <p>Character eye colour: {{ character.eye_color }}</p>
    <p>Character birth year: {{ character.birth_year }}</p>
    <p>Character gender: {{ character.gender }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return { character: {}, homeworld: {} };
  },
  mounted() {
    axios
      .get("https://swapi.co/api/people/1")
      .then((response) => (this.character = response.data));
  },
};
</script>

<style></style>
