<script setup>
import { addToCart } from '../store/addToCart';
import {store} from '../store/store'

const itemArray = addToCart.cartItem

const itemPrice = (item) => {
   return item.item.caloriesPerServing * item.count
}

const previousPrice = (item) =>{
    let prePrice = item.item.caloriesPerServing + (item.count * 120)
    return prePrice
}



</script>

<template>
    <div class="pt-4 px-3">
        <h4 class="text-gray-600 font-rubik text-base font-medium">Your items</h4>
        <div v-for="(item, index) in itemArray" :key="item.id" class="pb-3">
            <div class="flex gap-2 py-2">
                <img :src="item.item.image" class="w-20">
                <p class="text-pink-500 text-sm font-rubik font-normal">{{ item.item.name }}</p>
            </div>
            <div class="flex justify-between pt-1">
                <div class="flex gap-3">
                    <p class="text-gray-500 text-base font-rubik font-medium">Tk {{ itemPrice(item) }}</p>
                    <p class="text-gray-500 text-base font-rubik font-normal line-through">Tk {{ previousPrice(item) }}</p>
                </div>
                <div class="flex justify-around w-28 border border-gray-300 rounded-lg">
                    <div @click="addToCart.itemDecrement(item)" class="pt-0.5 rounded-lg bg-gray-200 hover:bg-pink-200 cursor-pointer">
                        <img @click="addToCart.removeItem(index)" v-if="item.count == 1" src="../assets/delete.svg">
                        <img v-if="item.count !== 1" src="../assets/minus.svg">
                    </div>
                    <div class="pt-0.5 pb-1 text-sm font-rubik font-normal">
                      {{ item.count }}
                    </div>
                    <div @click="addToCart.itemCountIncriment(item)" class="pt-1 rounded-lg bg-gray-200 hover:bg-pink-200 cursor-pointer">
                        <img src="../assets/plus.svg" class="">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between w-full py-3">
            <div class="text-gray-700 text-lg font-rubik font-normal">Total <small>(no vat)</small></div>
            <div class="text-gray-700 text-lg font-rubik font-normal">Tk </div>
        </div>
        <div class="bg-gray-400 text-white text-center ">
            <button class="text-center pb-1">Review payment & address</button>
        </div>
     
    </div>

</template>