<script setup>
import {ref,onBeforeMount,watch} from 'vue';
import axios from 'axios';
import ItemComponent from './IteamComponent.vue';

const items = ref ([]);
const products = ref([]);


const fatchData = (twenty) =>{
    axios.get(`https://dummyjson.com/recipes?limit=${twenty}`)
    .then(respon => {
        items.value = respon.data.recipes
        // console.log(items)
        
    })
}

onBeforeMount(()=>{
    fatchData(20)
})


</script>

<template>
    <section class="w-full px-3 sm:px-3 md:px-3 lg:px-20 xl:px-20 pt-5">
        <div class="w-full pb-5">
            <h3 class="text-gray-900 font-raleway text-2xl font-semibold capitalize pb-2">royal park residence hotel</h3>
            <div class="flex space-x-2 w-full pb-4">
                <div class="flex gap-2">
                    <img src="../assets/cycle.svg" class="w-5 sm:w-5 md:w-5 lg:w-8 xl:w-8">
                    <p class="text-gray-950 font-raleway text-xs sm:text-xs md:text-base lg:text-base font-medium">Free delivery</p>
                    <img src="../assets/dot.svg">
                </div>
                <div class="flex gap-2">
                    <img src="../assets/shop.svg" class="w-5 sm:w-5 md:w-5 lg:w-8 xl:w-8">
                    <p class="text-gray-950 font-rubik text-xs sm:text-xs md:text-base lg:text-base font-medium">TK 50 minimum</p>
                    <img src="../assets/dot.svg">
                </div>
                <div class="flex">
                    <p class="text-gray-950 font-raleway text-xs sm:text-xs md:text-base lg:text-base font-medium">Service free applices</p>
                </div>
            </div>
            <div class="flex">
                <div class="flex">
                    <img src="../assets/star.svg">
                    <p class="text-gray-900 font-rubik text-base font-medium pl-0.5">4.5/5</p>
                    <p class="pl-2 text-gray-700 font-normal font-rubik">(100+)</p>
                </div>
                <p class="text-base font-semibold font-raleway text-raspberryPink pl-4">See reviews</p>
                <div class="flex pl-5">
                    <img src="../assets/info.svg">
                    <p class="pl-1 text-raspberryPink text-base font-normal font-rubik">More info</p>
                </div>
            </div>
        </div>
        <!------->
        <div>
           <!-- {{ items }} -->
        </div>
        <div class="w-full">
            <div class="bg-white shadow-lg border-t rounded">
                <div class="flex py-3 px-2 shadow-lg border-b">
                    <input class="hidden sm:hidden md:block lg:block lg:w-52 border border-gray-100 px-4 pt-1 pb-2 rounded-3xl bg-gray-100" placeholder="serach your item">
                    <div v-for="(item,index) in items" :key="item.id" class="pl-1 sm:pl-1 md:pl-2 lg:pl-4 flex space-x-8 pt-1 w-24 sm:w-26 md:w-full xl:w-full">
                        <div v-if="item.id <= 6" class="flex">
                            <p class="text-gray-700 font-rubik text-xs sm:text-xs md:text-base lg:text-base font-medium pl-2 sm:pl-2 md:pl-2 lg:pl-0">{{ item.tags[0] }} </p>
                            <p class="text-gray-600 font-rubik hidden sm:hidden md:flex lg:flex text-xs sm:text-xs md:text-base lg:text-base font-normal pl-0.5">({{ item.servings }})</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--popular-->
            <div class="w-full bg-white pt-5">
                <div class="flex pb-1">
                    <img src="../assets/fire.svg">
                    <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Popular</p>
                </div>
                <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
            </div>
            <!------>
            <div class="w-full bg-white">
                <div class="flex gap-5">
                    <!------>
                    <div class="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
                        <ItemComponent ></ItemComponent>
                    </div>
                    <!------>
                    <div class="hidden sm:hidden md:hidden lg:block xl:block w-2/6 bg-green-200">
                        <p>kdsajhd</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style scoped>


</style>