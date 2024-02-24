<script setup>
import {ref} from 'vue';
import { store } from '../store/store';
import axios from 'axios';

const itemId = store.selectItemId

const singleProduct = ref('');

axios.get(`https://dummyjson.com/recipes/${itemId}`)
    .then(respon => {
        singleProduct.value = respon.data
        //  console.log(singleProduct.value)
        
    })

</script>

<template>
        <div class="fixed top-0 left-0 w-full h-full">
            <div class="relative w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 top-10 h-[85%] pb-0 bg-white rounded-lg mx-auto overflow-y-auto shadow-xl">
                <div class="w-full">
                    <img :src="singleProduct.image" class="w-full h-64 rounded-t-lg">
                    <div @click="store.closePopup()" class="absolute top-2 right-3 cursor-pointer bg-white w-9 rounded-full hover:bg-pink-100">
                        <img src="../assets/cross.svg" class="p-1.5 w-full ">
                    </div>
                </div>
                <div class="w-11/12 mx-auto ">
                    <div class="pt-5">
                        <P class="text-gray-900 text-lg font-rubik font-semibold pb-1 capitalize">{{ singleProduct.name }}</P>
                        <P class="text-gray-700 text-base font-rubik font-medium pb-1 ">{{ singleProduct.servings }} pcs </P>
                    </div>
                    <div class="pt-3">
                        <P class="text-gray-900 text-base font-rubik font-semibold pb-1 capitalize">Tk {{ singleProduct.caloriesPerServing }}</P>
                    </div>
                    <div class="pt-3">
                        <h3 class="text-gray-600 text-lg font-rubik font-semibold pb-1 capitalize">Special instructions</h3>
                        <p class="text-gray-500 text-base font-rubik font-medium pb-1">Any specific preferences ? Let the restaurant know. </p>
                    </div>
                    <div class="pt-3">
                        <input type="text" class="w-full h-24 rounded-lg border border-gray-300">
                    </div>
                    <div class="pt-8 w-full">
                        <h3 class="text-gray-600 text-lg font-rubik font-semibold pb-2 ">If this item is not available</h3>
                        <div @click="store.popupOrderShow()" class="w-full flex justify-between border border-gray-300 rounded-lg cursor-pointer">
                            <p v-if="!store.callTrue" class="text-gray-500 text-base font-rubik font-medium p-3">Remove it from my order</p>
                            <p v-if="store.callTrue" class="text-gray-500 text-base font-rubik font-medium p-3">Call me</p>
                            <img v-if="store.OrderShow" src="../assets/downArrow.svg" class="pr-3">
                            <img v-if="!store.OrderShow" src="../assets/upArrow.svg" class="pr-3">
                        </div>
                    </div>
                    <div v-if="store.OrderShow" class="bg-white shadow-lg rounded-lg w-full p-3">
                        <p @click="store.OrderShow = false , store.callTrue = false " class="text-base text-pink-500 hover:text-gray-600 font-rubik font-normal py-2 hover:bg-gray-100 rounded cursor-pointer">Remove it from my order</p>
                        <p @click="store.popupCallMe()"  class="text-base text-gray-500 font-rubik font-normal py-2 hover:bg-gray-100 rounded cursor-pointer">Call me</p>
                    </div>
                    
                </div>
                <!---order count --->
                <div class="mt-10 bg-gray-100 border w-full h-14 p-3">
                    <div class="w-11/12 mx-auto flex">
                        <div class="w-1/4 ">
                            <div class="flex space-x-3">
                                <div @click="store.popupDicrementBtn()" :class="store.popupCount == 1 ? 'cursor-not-allowed' : 'cursor-pointer'" class="w-8 h-8 bg-gray-50 rounded-full border flex justify-center cursor-pointer">
                                    <img class="" src="../assets/minus.svg">
                                </div>
                                <p class="text-gray-800 text-base font-rubik font-normal pt-1 ">
                                    {{ store.popupCount }}
                                </p>
                                <div @click="store.popupIncrementBtn()" class="w-8 h-8 bg-gray-50 rounded-full border flex justify-center cursor-pointer hover:bg-pink-100">
                                    <img class="" src="../assets/plus.svg">
                                </div>
                            </div>
                        </div>
                        <div class="w-3/4 ">
                            <div class="bg-pink-600 rounded-lg w-full cursor-pointer hover:scale-[1.1] hover:transition transition">
                                <p class="text-center text-white text-base font-rubik py-1.5">Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

</template>