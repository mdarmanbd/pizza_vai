<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'


const count = ref(0)


</script>

<template>
  <section class="w-full ">
      <!--- navbar --->
      <Navbar></Navbar>
      <!---RouterView---->
      <RouterView></RouterView>
    
  </section>
</template>

<style scoped>



</style>
