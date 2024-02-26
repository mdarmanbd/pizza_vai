<script setup>
import { addToCart } from '../store/addToCart';
import addToCartComponentVue from './addToCartComponent.vue';

</script>

<template>
    <div class="w-full">
       <div class="pt-3 px-3 pb-2">
           <div class="flex justify-around gap-2 w-full shadow-lg">
                <div class="border w-1/2 text-center rounded-lg shadow hover:bg-pink-50">
                    <button class="text-pink-500 text-base font-rubik font-normal text-center py-3">
                        Delivery
                        <br>
                        <samp v-if="!addToCart.showItemPopup" class="text-gray-400 text-sm">20min</samp>
                    </button>
                </div>
                <div class="border w-1/2 text-center rounded-lg shadow">
                    <button class="text-gray-500 text-base font-rubik font-normal text-center py-3">Pick-up</button>
                </div>
           </div>
       </div>
       <div v-if="addToCart.hungryComponent" class="w-full px-3 pb-3">
            <div class="flex justify-center pt-10 pb-5">
                <img src="../assets/download.png" class="w-28">
            </div>
            <div class="text-center pb-5">
                <h3 class="text-gray-800 text-lg font-rubik font-medium pb-2">Hungry?</h3>
                <p class="text-gray-600 text-sm font-rubik font-normal">You haven't added anything <br> to your cart!</p>
            </div>
            <div class="flex justify-between pb-2">
                <div class="">
                    <p class="text-gray-600 text-base font-rubik font-medium">Total <small>(Incl VAT)</small></p>
                </div>
                <div class="">
                    <p class="text-gray-600 text-base font-rubik font-medium">Tk 0</p>
                </div>
            </div>
            <div class="w-full bg-gray-300 rounded-lg text-center ">
                <button class="text-white text-sm py-2 font-rubik font-normal text-center">Review payment and address</button>
            </div>
       </div>
       <!---- add to cart component ---->
       <div v-if="!addToCart.hungryComponent">
           <addToCartComponentVue></addToCartComponentVue>
       </div>
       
    </div>
    
</template>