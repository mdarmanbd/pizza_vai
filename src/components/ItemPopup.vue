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
       
        <div class="relative w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 top-1/3 h-64 bg-green-100 mx-auto rounded  ">
                <div class="grid grid-cols-1 p-3 w-full ">
                    <p class="text-xl text-red-500">{{ itemId }}</p>
                    <div @click="store.closePopup()" class="w-full flex justify-end cursor-pointer">
                      <img src="../assets/cross.svg">
                    </div>
                </div>
                <div class="w-11/12 mx-auto">
                    <img :src="singleProduct.image" class="w-36">
                    <P>{{ singleProduct.name }}</P>
                    <!-- <div class="pb-3 flex justify-start gap-2">
                        <div class="">
                           
                        </div>
                        <p class="text-black text-base font-normal">Success: You have added
                           
                             to your product comparison!</p>
                    </div>
                    <div class="pl-3 flex gap-3">
                        <button class="bg-blue-700 text-yellow-300 text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:duration-300 hover:translate-x-1">Compare Now</button>
                        <button  class=" bg-white text-blue-800 text-base font-semibold px-4 pb-2 pt-1 rounded hover:bg-blue-800 hover:text-white hover:duration-300 border-2 border-blue-800 hover:translate-x-1">Comfirm Order</button>
                    </div> -->
                </div>
        </div> 
    </div>

</template>