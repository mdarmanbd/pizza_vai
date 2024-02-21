import{reactive} from 'vue'


const store = reactive({
  ItemPopUp : false,
  
  silectItemPopUp(){
    this.ItemPopUp = true
  }

})

export{store}