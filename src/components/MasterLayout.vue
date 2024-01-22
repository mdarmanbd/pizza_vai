<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'


const count = ref(0)


</script>

<template>
  <section class="w-full bg-gray-50">
    <div class="w-11/12 mx-auto">
      <!--- navbar --->
      <Navbar></Navbar>
    </div>
    <div class="w-full bg-midnightBlue ">
      <!--- bennar --->
      <div class="w-11/12 mx-auto">
        
      </div>
    </div>
   
  </section>
</template>

<style scoped>



</style>
