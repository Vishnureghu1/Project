<template>
  <div id="app" class="bg-green-400 h-screen">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
