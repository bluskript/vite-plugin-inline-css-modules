<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { css } from 'vite-plugin-inline-css-modules';

const classes = css`
.hello {
  color: green;
}
`;
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" :class="classes.hello" />
  <h1 :class="classes.hello">Hello!</h1>
</template>

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
