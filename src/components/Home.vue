<script setup>
import Bennar from './bennar.vue';

</script>

<template>
    <div class="w-full ">
        <!--- bennar --->
        <Bennar></Bennar>
    </div>

    <div class="px-3 lg:px-20">
        <h3 class="pt-8 text-gray-900 text-xl font-raleway font-medium">All restaurants</h3>
        <div class="pt-5 pb-10">
            <div class="">
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">

                     <RouterLink to="/PizzaItaliono">
                        <div class="card-bg w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-1">welcome gift: free de.. </p>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="flex justify-between">
                                <p class="text-gray-950 text-base font-raleway font-normal">Piza italiano Ristorante</p>
                                <div class="flex gap-1">
                                    <img src="../assets/star.svg">
                                     <p class="text-gray-700 text-base font-raleway font-normal "> 4.2(51)</p>
                                </div>
                            </div>
                            <p class="text-gray-700 text-sm font-raleway font-normal">Italian</p>
                        </div>
                     </RouterLink>

                    </div>

                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <router-link to="/Kodo">
                        <div class="bg-kudos hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
                        </router-link>
                   
                    </div>

                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-kabab hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
                <!------>
                <div class="grid grid-cols-12 gap-5 py-7">
                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-pitha hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-cafe hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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

                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-chicking hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
                <!----->
                <div class="grid grid-cols-12 gap-5 py-7">
                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-barger hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-nori hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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

                    <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 w-full rounded-lg border overflow-hidden cursor-pointer">
                        <div class="bg-dalifarnce hover:transform hover:scale-[1.01] bg-center bg-no-repeat bg-cover p-[15px] transition-all duration-300 w-full h-56 rounded-tl-lg rounded-tr-lg">
                            <div class="mb-2 flex justify-start gap-2 bg-raspberryPink w-1/4 sm:w-1/4 md:w-1/2 lg:w-1/2 xl:w-1/4 rounded-lg px-1 pb-1 ">
                                <img src="../assets/interaction.svg">
                                <p class="text-white font-raleway text-xs font-medium capitalize pt-0.5"> 12% off</p>
                            </div>
                            <div class="flex justify-start gap-2 bg-raspberryPink w-1/2 sm:w-1/2 md:w-11/12 lg:w-4/5 xl:w-1/2 rounded-lg px-1 pb-1 ">
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
    transition: 0.3s;
}

.card-bg:hover{
    transform: scale(1.01);
    transition: 0.3s;
}



</style>