<script setup>
const props = defineProps([
    'items'
])

const numberOfItem = 6 

</script>

<template>
<section>
    <!-- <p>Name : {{ items[0].name }}</p> -->
    <div class="w-full py-5">
        <!-- <div v-for="(digit,index) in numberOfItem" :key="index" class="">
            <div v-if="0 == (digit-1)"  class="">
                <div v-for="(singleItem,index) in items[digit-1].ingredients" key="index" class="">
                    <p>{{ singleItem }}</p>
                </div>
            </div>
        </div> -->
        
        <div class="grid grid-cols-12 gap-6">
            <div class="cursor-pointer col-span-6 hover:bg-pink-50 hover:transition-all transition-all hover:transform hover:scale-[1.03] hover:rounded-lg rounded-lg">
                <div class="border rounded-lg w-full py-3 px-2 ">
                    <div class="w-full flex">
                        <div class="w-3/5">
                            <p class="text-gray-700 text-sm font-rubik font-medium">
                                {{ items[0].ingredients[0] }} 
                            </p>
                            <p class="text-gray-500 text-sm font-rubik font-medium pt-1">
                                {{ items[0].instructions[1] }}  
                            </p>
                            <p class="text-gray-700 text-sm font-rubik font-medium pt-8">
                                Tk  {{ items[0].caloriesPerServing }}
                            </p>
                        </div>
                        <div class="w-2/5 relative">
                            <img :src="items[0].image" class="w-full ">
                            <img src="../assets/plus.svg" class="bg-white rounded-full w-8 p-0.5 absolute right-2 bottom-0">
                        </div>
                    </div>
                   
                    
                    
                </div>
            </div>
            <div class="col-span-6">
                <div class="border rounded-lg w-full py-3 px-2">
                    <p class="text-gray-800 text-sm font-raleway font-medium">
                        {{ items[0].ingredients[1] }}
                    </p>
                    <div class="flex justify-between pt-12">
                        <p class="text-gray-800 text-sm font-rubik font-medium">
                          from Tk  {{ items[0].caloriesPerServing }}
                        </p>
                        <img src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
        <!------>
        <div class="grid grid-cols-12 gap-6 py-5">
            <div class="col-span-6">
                <div class="border rounded-lg w-full py-3 px-2">
                    <p class="text-gray-800 text-sm font-raleway font-medium">
                        {{ items[0].ingredients[2] }}
                    </p>
                    <div class="flex justify-between pt-12">
                        <p class="text-gray-800 text-sm font-rubik font-medium">
                          from Tk  {{ items[0].caloriesPerServing }}
                        </p>
                        <img src="../assets/plus.svg">
                    </div>
                </div>
            </div>
            <div class="col-span-6">
                <div class="border rounded-lg w-full py-3 px-2">
                    <p class="text-gray-800 text-sm font-raleway font-medium">
                        {{ items[2].ingredients[2] }}
                    </p>
                    <div class="flex justify-between pt-12">
                        <p class="text-gray-800 text-sm font-rubik font-medium">
                          from Tk  {{ items[0].caloriesPerServing }}
                        </p>
                        <img src="../assets/plus.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>

</template>

<style scoped>

</style>