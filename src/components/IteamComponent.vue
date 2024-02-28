<script setup>
import {store} from '../store/store';
import axios from 'axios';
import {ref,onBeforeMount,watch} from 'vue';
import ItemPizzaVue from './ItemPizza.vue';
import ItemVegetarianVue from './ItemVegetarian.vue';
import itemCookiesVue from './ItemCookies.vue';
import ItemPastaVue from './ItemPasta.vue';
import itemChickenVue from './ItemChicken.vue';
import itemSaladVue from './ItemSalad.vue';

const itemPizza = ref('')
const itemVegetarian = ref('')
const itemCookies = ref('')
const itemPasta = ref('')
const itemChicken = ref('')
const itemSalad = ref('')


    axios.get(`https://dummyjson.com/recipes?limit=4&skip=0&select=name,image,instructions,caloriesPerServing`)
    .then(respon => {
        itemPizza.value = respon.data.recipes
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
    <!---item one--->
    <ItemPizzaVue :itemPizza="itemPizza"/>
    <!---item number two--->
    <ItemVegetarianVue :itemVegetarian="itemVegetarian"/>
    <!---item number three----->
    <itemCookiesVue :itemCookies="itemCookies"/>
    <!----item number four---->
    <ItemPastaVue :itemPasta = "itemPasta"></ItemPastaVue>
   <!----item number five---->
    <itemChickenVue :itemChicken="itemChicken"></itemChickenVue>
    <!----item number six---->
    <itemSaladVue :itemSalad="itemSalad"></itemSaladVue>
</section>

</template>

<style scoped>

</style>