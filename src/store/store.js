import{reactive, ref} from 'vue'


const store = reactive({
  ItemPopUp : false,

  selectItem : [],
  selectItemId : ref(),
  
  silectItemPopUp(item){
    this.ItemPopUp = true
    this.selectItem.push(item)
    this.selectItemId = item.id
   
   
  },

  closePopup(){
    this.ItemPopUp = false
  }

})

export{store}