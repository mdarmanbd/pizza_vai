<script setup>
import {store} from '../store/store';
import axios from 'axios';
import {ref,onBeforeMount,watch} from 'vue';



const itemOne = ref('')
const itemVegetarian = ref('')
const itemCookies = ref('')
const itemPasta = ref('')
const itemChicken = ref('')
const itemSalad = ref('')


    axios.get(`https://dummyjson.com/recipes?limit=4&skip=0&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemOne.value = respon.data.recipes
    })

    axios.get(`https://dummyjson.com/recipes?limit=3&skip=4&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemVegetarian.value = respon.data.recipes
    })    

    axios.get(`https://dummyjson.com/recipes?limit=2&skip=5&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemCookies.value = respon.data.recipes
    })

    axios.get(`https://dummyjson.com/recipes?limit=4&skip=7&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemPasta.value = respon.data.recipes
    })

    axios.get(`https://dummyjson.com/recipes?limit=3&skip=8&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemChicken.value = respon.data.recipes
    }) 

    axios.get(`https://dummyjson.com/recipes?limit=4&skip=10&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemSalad.value = respon.data.recipes
    }) 

</script>

<template>
<section>
    <!-- <p>Name : {{ itemOne }}</p> -->
    <div  class="">
       <div class="w-full py-5">
            <div class="grid grid-cols-12 gap-6">
                <div v-for="(item,index) in itemOne" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                    <div class="w-full flex">
                        <div class="w-3/5">           
                            <p class="text-gray-700 text-sm font-rubik font-medium">
                                {{ item.name }}
                            </p>          
                            <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                                {{ item.instructions[1] }}
                            </p>
                            <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                                Tk: {{ item.caloriesPerServing }}
                            </p>
                        </div>
                        <div class="w-2/5 relative">
                            <img :src="item.image">
                            <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <!---item number two--->
    <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Vegetarian</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>
    
    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in itemVegetarian" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>          
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk: {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!---item number three----->
    <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Cookies</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>
    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in itemCookies" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>          
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk: {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!----item number four---->
    <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Pasta</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>
    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in itemPasta" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>          
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk: {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
   <!----item number five---->
   <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Chicken</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>

    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in itemChicken" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>          
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk: {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!----item number six---->
   <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Salad</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>
    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in itemSalad" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 mb-3">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>          
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk: {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-8 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>


</section>

</template>

<style scoped>

</style>