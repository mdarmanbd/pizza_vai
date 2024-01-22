<script setup>
import { ref } from 'vue'



const count = ref(0)


</script>

<template>
  <section class="w-full">
    <!----laptob view---->
    <div class="hidden sm:hidden md:hidden lg:flex xl:flex py-2 justify-between w-full">
        <div class="flex gap-2">
            <div class="">
                <img src="../assets/pizzaLogo.svg">
            </div>
            <h3 class="text-lg font-raleway font-medium">Pizza vai</h3>
        </div>
        <div class="flex cursor-pointer p-1 hover:bg-lightPink hover:rounded-lg hover hover:transition-all transition-all">
            <div class="">
                <img src="../assets/location.svg">
            </div>
            <h3 class="font-raleway text-base text-charcoal pt-1">New address <span class="text-raspberryPink font-semibold"> Road 16 Uttara Dhaka </span> </h3>
        </div>
        <div class="flex gap-4">
            <button class="hover:translate-y-1 hover:transition-all transition-all hover:bg-lightPink bg-transparent px-5 border border-raspberryPink rounded-lg pb-1  text-raspberryPink text-base font-raleway font-medium w-28 h-9">
                Log in
            </button>
            <button class="hover:translate-y-1 hover:transition-all transition-all bg-raspberryPink px-5 border border-raspberryPink rounded-lg pb-1  text-white text-base font-raleway font-medium w-28 h-9">
                Sign up
            </button>
            <div class=" flex gap-1 justify-center hover:bg-lightPink rounded-lg">
                <div class="pt-2">
                    <img src="../assets/world.svg">
                </div>
                <h3 class="pt-1 text-base font-normal text-black">EN</h3>
                <div class="pt-0.5">
                    <img src="../assets/downArrow.svg">
                </div>
            </div>
            <div class="p-1 flex gap-1 hover:bg-lightPink w-24 justify-center rounded-full">
                <div class="">
                    <img src="../assets/shoppingCart.svg">
                </div>
                <p class="pt-1 font-raleway text-xl font-normal">2</p> 
            </div>
        </div>
    </div>
    <!---responsive view-->
    <div class="block sm:block md:block lg:hidden xl:hidden w-full py-2">
        <div class="flex justify-between w-full">
            <div class="">
                <img src="../assets/person.svg">
            </div>
            <div class="flex gap-2">
                <div class="">
                    <img src="../assets/pizzaLogo.svg">
                </div>
                <h2 class="pt-2 text-raspberryPink font-raleway text-lg font-bold ">Pizza vai</h2>
            </div>
            <div class="flex gap-1 pt-1">
                <div class="">
                    <img src="../assets/shoppingCart.svg">
                </div>
                <p class="font-raleway text-lg font-normal pt-1">2</p>
            </div>
        </div>
       <div class="flex justify-center w-full">
            <div class="flex cursor-pointer p-1 hover:bg-lightPink hover:rounded-lg hover hover:transition-all transition-all">
                <div class="">
                    <img src="../assets/location.svg">
                </div>
                <h3 class="font-raleway text-base text-charcoal pt-1">New address <span class="text-raspberryPink font-semibold"> Road 16 Uttara Dhaka </span> </h3>
            </div>
       </div>
        
    </div>


  </section>
</template>

<style scoped>



</style>
