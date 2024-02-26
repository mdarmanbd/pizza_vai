<script setup>
import { addToCart } from '../store/addToCart';
import {store} from '../store/store'
const itemArray = addToCart.cartItem

// console.log(addToCart.cartItem)


</script>

<template>
    <div class="pt-4 px-3">
        <h4 class="text-gray-600 font-rubik text-base font-medium">Your items</h4>
        <div v-for="(item, index) in itemArray" :key="item.id" class="">
            <div class="flex gap-2 py-2">
                <img :src="item.item.image" class="w-20">
                <p class="text-pink-500 text-sm font-rubik font-normal">{{ item.name }}</p>
            </div>
            <div class="flex justify-between pt-1">
                <div class="flex gap-3">
                    <p class="text-gray-500 text-base font-rubik font-medium">Tk {{ item.item.caloriesPerServing }}</p>
                    <p class="text-gray-500 text-base font-rubik font-normal line-through">Tk {{ (item.item.caloriesPerServing + 120) }}</p>
                </div>
                <div class="flex justify-around w-28 border border-gray-300 rounded-lg">
                    <div class="pt-0.5 rounded-full hover:bg-pink-200 cursor-pointer">
                        <!-- <img src="../assets/delete.svg"> -->
                        <img src="../assets/minus.svg">
                    </div>
                    <div class="pt-0.5 pb-1 text-sm font-rubik font-normal">
                      {{ item.count }}
                    </div>
                    <div class="pt-1 rounded-full hover:bg-pink-200 cursor-pointer">
                        <img src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
        
     
    </div>

</template>