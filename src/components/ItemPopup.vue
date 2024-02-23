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
       
        <div class="relative w-11/12 sm:w-11/12 md:w-1/2 lg:w-2/3 xl:w-2/3 top-1/4 h-[55%] pb-10 bg-white rounded-lg mx-auto overflow-y-auto shadow-xl">
                <div class="w-full">
                    <img :src="singleProduct.image" class="w-full h-40 rounded-t-lg">
                    <div @click="store.closePopup()" class="absolute top-2 right-3 bg-white w-9 rounded-full hover:bg-pink-100">
                        <img src="../assets/cross.svg" class="p-1.5 w-full ">
                    </div>
                </div>
                <div class="w-11/12 mx-auto ">
                    <div class="pt-5">
                        <P class="text-gray-900 text-xl font-rubik font-semibold pb-1 capitalize">{{ singleProduct.name }}</P>
                        <P class="text-gray-700 text-base font-rubik font-medium pb-1 ">{{ singleProduct.servings }} pcs </P>
                    </div>
                    <div class="pt-3">
                        <P class="text-gray-900 text-lg font-rubik font-semibold pb-1 capitalize">Tk {{ singleProduct.caloriesPerServing }}</P>
                    </div>
                    <div class="pt-3">
                        <h3 class="text-gray-600 text-xl font-rubik font-semibold pb-1 capitalize">Special instructions</h3>
                        <p class="text-gray-500 text-base font-rubik font-medium pb-1">Any specific preferences ? Let the restaurant know. </p>
                    </div>
                    <div class="pt-3">
                        <input class="w-full h-24 rounded-lg border border-gray-300">
                    </div>
                    <div class="pt-8 w-full">
                        <h3 class="text-gray-600 text-xl font-rubik font-semibold pb-2 ">If this item is not available</h3>
                        <div class="w-full flex justify-between border border-gray-300 rounded-lg">
                            <p class="text-gray-500 text-base font-rubik font-medium p-3">Remove it from my order</p>
                            <img src="../assets/downArrow.svg" class="pr-3">
                        </div>
                    </div>
                </div>

        </div> 
    </div>

</template>