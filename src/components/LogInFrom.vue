<script setup>
import { nav } from '../store/nav';

</script>

<template>

    <div v-if="nav.LogIn" class="w-full h-[92vh] bg-mediumGray z-10 ">
        <div class="relative top-20 left-0 right-0 z-80 shadow-lg rounded bg-white w-1/4 m-auto p-4 "> 
            <div @click="nav.closeLogIn" class="flex justify-end cursor-pointer">
                <img src="../assets/cross.svg">
            </div>
            <h3 class="text-2xl font-raleway font-semibold text-gray-900 capitalize pb-1">Welcome!</h3>
            <p class="text-base font-raleway font-normal text-gray-900 pb-3">Sign up or log in to continue</p>
           <div class="opacity-100 hover:opacity-90 hover:shadow hover:transition-all transition-all cursor-pointer bg-blue-500 rounded py-1 px-2 flex mb-4">
                <div class="">
                    <img src="../assets/facebook.svg">
                </div>
                <p class="pl-16 pt-1 text-white font-raleway text-base font-normal">Continue with Facebook</p>
           </div>
           <div class="hover:bg-blue-50 hover:border hover:border-blue-200 hover:shadow hover:transition-all transition-all cursor-pointer bg-transparent border rounded py-1 px-2 flex mb-4">
                <div class="">
                    <img src="../assets/google.svg">
                </div>
                <p class="pl-16 pt-1 text-gray-900 font-raleway text-base font-normal">Continue with Google</p>
           </div>
           <div class="cursor-pointer bg-black rounded py-1 pb-2 px-2 flex mb-4">
                <div class="">
                    <img src="../assets/apple.svg">
                </div>
                <p class="pl-16 pt-1 text-white font-raleway text-base font-normal">Continue with Apple</p>
           </div>
           <div class="w-full mb-4">
                <p class="text-center text-gray-900 font-raleway font-medium text-lg">or</p>
           </div>
           <div class="opacity-85 hover:opacity-100 hover:shadow hover:transition-all transition-all cursor-pointer  bg-raspberryPink rounded py-1 pb-2 px-2 mb-4">
                <p class="text-center py-1 text-white font-raleway text-base font-normal">Log in</p>
           </div>
           <div class="hover:bg-lightPink hover:border hover:border-lightPink hover:shadow hover:transition-all transition-all cursor-pointer bg-transparent border border-raspberryPink rounded py-1 pb-2 px-2 ">
                <p class="text-center py-1 text-raspberryPink font-raleway text-base font-semibold">Sign up</p>
           </div>
        </div>
    </div>

</template>

<style>

</style>