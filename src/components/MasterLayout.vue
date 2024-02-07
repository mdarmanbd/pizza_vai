<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Bennar from '../components/Bennar.vue';
import AllRestaurants from '../components/AllRestaurants.vue';

const count = ref(0)


</script>

<template>
  <section class="w-full ">
      <!--- navbar --->
      <Navbar></Navbar>
    
    <div class="w-full ">
      <!--- bennar --->
      <div class="">
        <Bennar></Bennar>
      </div>
    </div>
    <!---All restaurants--->
    <div class="w-full">
      <AllRestaurants></AllRestaurants>
    </div>
   
  </section>
</template>

<style scoped>



</style>
