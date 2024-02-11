<script setup>
import {store} from '../store/store';
const props = defineProps([
    'items'
])

const numberOfItem = 6 

</script>

<template>
<section>
    <!-- <p>Name : {{ items[0].name }}</p> -->
    <!-- <div v-for="(countOfItem,index) in numberOfItem" :key="index">
        <div v-if=" 0== (countOfItem-1)" class="">
            <div v-for="(item,index) in items[countOfItem-1]" :key="index" class="">
                 <p>{{ item.name }}</p>
                 <p>{{ item.instructions[1] }}</p>
                 <p>Tk. {{ item.caloriesPerServing }}</p>
                 <img :src="item.image">
            </div>
        </div>
    </div> -->
     <div  class="">
       <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div v-for="(item,index) in items" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2 ">
                <div @click="store.selectItem(item)" class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>
                                             
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                           Tk. {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-10 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
            <div v-for="(item,index) in items" :key="item.id" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2">
                <div @click="store.selectItem(item)" class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ item.name }}
                        </p>
                                             
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ item.instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk. {{ item.caloriesPerServing }}
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="item.image">
                        <img class="w-10 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div> 
            </div>
    
    </div>
    </div>  
    </div>

    <!------>
    <div class="w-full bg-white pt-5">
        <div class="flex pb-1">
            <img src="../assets/fire.svg">
            <p class="text-gray-900 font-semibold font-raleway pl-0.5 text-lg">Popular</p>
        </div>
        <p class="text-gray-800 font-raleway text-sm">Most orderd right now.</p>
    </div>

    <!-- <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div @click="store.selectItem()" class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg w-full py-3 px-2 ">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                                {{ items[0].ingredients[0] }}
                        </p>
                                             
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                                {{ items[0].instructions[1] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                               Tk {{ items[0].caloriesPerServing }}   
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="items[0].image">
                        <img class="w-10 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div>
            </div>
            <div class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg border w-full py-3 px-2">
                <div class="w-full flex">
                    <div class="w-3/5">           
                        <p class="text-gray-700 text-sm font-rubik font-medium">
                            {{ items[0].ingredients[1] }}
                        </p>
                                             
                        <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                            {{ items[0].instructions[2] }}
                        </p>
                        <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                            Tk {{ items[0].caloriesPerServing }}   
                        </p>
                    </div>
                    <div class="w-2/5 relative">
                        <img :src="items[0].image">
                        <img class="w-10 bg-white  rounded-full absolute right-1 bottom-2" src="../assets/plus.svg">
                    </div>
                </div> 
            </div>
            
        
        

    </div>
    </div>   -->
</section>

</template>

<style scoped>

</style>