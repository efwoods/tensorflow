<template>

<HomeVue></HomeVue>

</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import HomeVue from '@/views/HomeVue.vue'
export default {
  name: 'App',
  components: {
    HomeVue
    // HelloWorld
  },
  created() {
        console.log("Hello from Tensorflow");
  }
}
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
