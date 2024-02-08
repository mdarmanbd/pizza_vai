import{reactive} from 'vue'


const store = reactive({
  pizza : true,
  pizzaItaliono(){
    this.pizza = false;
  }

})

export{store}