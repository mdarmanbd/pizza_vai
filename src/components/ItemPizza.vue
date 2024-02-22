
<script setup>
import { store } from '../store/store';

const props = defineProps([
    'itemPizza'
])


</script>


<template>
    <div class="">
        <!-- <p>{{ store.selectItemId }}</p> -->
       <div class="w-full py-5">
            <div class="grid grid-cols-12 gap-6">
                <div v-for="(item,index) in itemPizza" :key="item.id" class="relative hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg cursor-pointer col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6  rounded-lg border w-full py-3 px-2 mb-3">
                    <div @click="store.silectItemPopUp(item)" class="">
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
                            <div class="w-2/5 ">
                                <img :src="item.image">
                            </div>
                        </div>
                    </div>
                    <img class="w-8 bg-white hover:bg-red-50 rounded-full absolute right-2 bottom-5" src="../assets/plus.svg">
                </div>
            </div>
        </div>  
    </div>

</template>