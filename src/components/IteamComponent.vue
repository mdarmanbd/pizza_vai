<script setup>
const props = defineProps([
    'items'
])

</script>

<template>
<section>
    <!-- <p>Name : {{ items }}</p> -->
    <div class="w-full py-5">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6">
                <div class="border rounded-lg h-32 w-full py-3 px-2">
                    <p class="text-gray-800 text-sm font-raleway font-medium">
                        {{ items[0].name }}
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
                <div class="border rounded-lg h-32 w-full py-3 px-2">
                    <p class="text-gray-800 text-sm font-raleway font-medium">
                        {{ items[0].name }}
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