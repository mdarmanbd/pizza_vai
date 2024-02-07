<script setup>
import { ref } from 'vue'
import {nav} from '../store/nav.js'
import GoogleMapLocation from './GoogleMapLocation.vue';
import LogInFrom from './LogInFrom.vue';

</script>

<template>
  <section class="w-full sticky top-0 overflow-hidden">
    <!----laptob view---->
    <div class="hidden sm:hidden md:hidden lg:flex xl:flex py-2 justify-between w-full bg-white px-20 shadow-lg ">
        <div class="flex gap-2">
            <div class="">
                <img src="../assets/pizzaLogo.svg">
            </div>
            <h3 class="text-lg font-raleway font-medium pt-1">Pizza vai</h3>
        </div>
        <div @click="nav.Location" class="flex cursor-pointer p-1 hover:bg-lightPink hover:rounded-lg hover hover:transition-all transition-all">
            <div class="">
                <img src="../assets/location.svg">
            </div>
            <h3 class="font-raleway text-base text-charcoal pt-1">New address <span class="text-raspberryPink font-semibold"> Road 16 Uttara Dhaka </span> </h3>
        </div>
        <div class="flex gap-4">
            <button @click="nav.LogInBtn" class="hover:translate-y-1 hover:transition-all transition-all hover:bg-lightPink bg-transparent px-5 border border-raspberryPink rounded-lg pb-1  text-raspberryPink text-base font-raleway font-medium w-28 h-9">
                Log in
            </button>
            <button @click="nav.SignUpBtn" class="hover:translate-y-1 hover:transition-all transition-all bg-raspberryPink px-5 border border-raspberryPink rounded-lg pb-1  text-white text-base font-raleway font-medium w-28 h-9">
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

    <!---nav bar location & address ---->
    <div v-if="nav.NavLocation" class=" w-full">
        <div class="w-45 m-auto">
            <div class="bg-white opacity-80 shadow-2xl p-2 rounded-lg">
                <div class="flex justify-between w-full">
                    <div v-if="!nav.LocatedArrow" class="flex bg-white w-5/6 justify-between rounded-lg py-1 border border-gray-300">
                        <input v-model="nav.SearchLocation" class="w-3/4  pl-5 py-1 rounded-lg focus:outline-none" placeholder="uttara lake dhaka">
                        <img @click="nav.CrossArrow" class="pr-5 cursor-pointer" src="../assets/cross.svg">
                    </div>
                    <div v-if="nav.LocatedArrow" class="flex bg-white w-5/6 justify-between rounded-lg py-1 border border-gray-300">
                        <input v-model="nav.SearchLocation" class="w-3/4  pl-5 py-1 rounded-lg focus:outline-none" placeholder="dhanmondi lake dhaka">
                        <img @click="nav.FindLocation" class="pr-5 cursor-pointer" src="../assets/located.svg">
                    </div>
                    <button @click="nav.RightSearchArrow" class="cursor-pointer bg-raspberryPink px-5 border border-raspberryPink rounded-lg pb-1  text-white text-base font-raleway font-medium">
                        <img src="../assets/rightArrow.svg">
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    <!---Log in from--->
    <LogInFrom></LogInFrom>
  
    <!--- location view --->
    <div v-if="nav.LocationView" class="w-full pt-10">
        <div class="w-1/2 mx-auto">
            <div class="bg-white shadow-lg z-80 rounded-lg px-3 py-4">
                <div class="flex justify-between">
                    <div class="flex gap-1">
                        <img src="../assets/located.svg">
                        <h3 class="font-raleway text-lg font-semibold pb-1 text-gray-900">What's your exact location?</h3>
                    </div>
                    <div @click="nav.CloseLocation" class="cursor-pointer">
                        <img src="../assets/twoBarCross.svg">
                    </div>
                </div>
                <p class="text-base font-raleway font-normal text-gray-900 pb-2">Providing your location enabless more accurate search and delivery ETA , seamless oreder tracing 
                    and personalised recommendations.
                </p>

                <div class="flex bg-white w-full justify-between rounded-lg py-1 border border-gray-300">
                    <input class="w-3/4 pl-5 py-1 rounded-lg focus:outline-none" placeholder="uttara lake dhaka">
                    <img class="pr-5 cursor-pointer" src="../assets/cross.svg">
                </div>

                <div class="pt-3">
                    <img class="w-full h-auto" src="../assets/googleMap.jpg">
                    <!-- <GoogleMapLocation></GoogleMapLocation> -->
                </div>

            </div>
        </div>

    </div>

    <!---responsive view-->
    <div class="block sm:block md:block lg:hidden xl:hidden w-full py-2 bg-white px-3">
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
