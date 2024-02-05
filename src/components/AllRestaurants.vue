<script setup>

</script>

<template>
    <div class="px-20">
        <h3 class="pt-8 text-gray-900 text-xl font-raleway font-medium">All restaurants</h3>
        <div class="pt-5 pb-10">
            <div class="">
                <div class="grid grid-cols-12 gap-5">
                    
                    <div class="col-span-4 w-full rounded-lg border">
                        <div class="card-bg w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-1">welcome gift: free de.. </p>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="flex justify-between">
                                <p class="text-gray-950 text-base font-raleway font-normal">Evviva italian Ristorante</p>
                                <div class="flex gap-1">
                                    <img src="../assets/star.svg">
                                     <p class="text-gray-700 text-base font-raleway font-normal "> 4.2(51)</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-sm font-raleway font-normal">Italian</p>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    

</template>

<style scoped>
.card-bg{
    background-image: url('https://images.deliveryhero.io/image/fd-bd/LH/wj5v-listing.jpg?width=400&height=225');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 15px;
}
</style>