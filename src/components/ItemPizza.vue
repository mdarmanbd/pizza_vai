
<script setup>
import {ref} from 'vue'
import { store } from '../store/store';
import { addToCart } from '../store/addToCart';

const props = defineProps([
    'itemPizza'
])

const itemArray = addToCart.cartItem
// const singleItemCount = ref(1)

window.item = itemArray;


const doItemExists = (id) => {
    let found = true;
    for(let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].item.id == id) {
            found = false;
            break;
        }
    }
    return found;
}

const findCount = (id) => {
    let num = ref()
    for(let i = 0; i < itemArray.length; i++){

        if(id == itemArray[i].item.id){
            num = itemArray[i].count
            return num
        }
    }
}

const plusButton= (item) => {
    if(!item.hasOwnProperty('hidePlusIcon')) {
        item.hidePlusIcon = true;
      }
      else{
        item.hidePlusIcon = true
      }
      item.singleItemCount = 1;
      
    //   addToCart.singleItem.push(item) 
    
}

const singleItemIncriment = (item) => {
    item.singleItemCount++
}

const singleItemDecrement = (item) => {
    item.singleItemCount--
}

const singleItemDeleteIcon = (item) => {
    item.hidePlusIcon = false

}

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
                    <!--- A HUGE OPARETION --->
                    <!--plus icone--- !item.hidePlusIcon --->
                    <div @click="plusButton(item)" v-if="!item.hidePlusIcon" class="">
                        <img v-if="doItemExists(item.id)" class="w-8 bg-white hover:bg-red-50 rounded-full absolute right-2 bottom-5" src="../assets/plus.svg">
                    </div>
                    <!---quantiy mini bar--->
                   <div v-if="item.hidePlusIcon" class="w-24 bg-white hover:bg-red-50 rounded-full absolute right-2 bottom-5">
                        <div class="flex justify-around w-full border border-gray-300 rounded-lg">
                            <div @click="singleItemDecrement(item)" class="pt-0.5 rounded-lg bg-gray-200 hover:bg-pink-200 cursor-pointer">
                                <img @click="singleItemDeleteIcon(item)" v-if="item.singleItemCount == 1" src="../assets/delete.svg">
                                <img v-if="item.singleItemCount !== 1" src="../assets/minus.svg">
                            </div>
                            <div class="pt-0.5 pb-1 text-sm font-rubik font-normal">
                                <!-- {{ item.count }} -->
                                {{ item.singleItemCount }}
                            </div>
                            <div @click="singleItemIncriment(item)" class="pt-1 rounded-lg bg-gray-200 hover:bg-pink-200 cursor-pointer">
                                <img src="../assets/plus.svg" class="">
                            </div>
                        </div>
                   </div>
                    <!---only quantity-->
                    <div v-if="!doItemExists(item.id)" >
                        <div class="bg-pink-600 rounded-full absolute right-2 bottom-5">
                           <p class="text-white font-rubik font-normal text-base text-center p-1 w-8">{{ findCount(item.id) }}</p> 
                        </div>
                    </div>

                </div>
            </div>
        </div>  
    </div>

</template>