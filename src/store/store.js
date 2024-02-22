import{reactive, ref} from 'vue'


const store = reactive({
  ItemPopUp : false,

  selectItem : [],
  selectItemId : [],
  
  silectItemPopUp(item){
    this.ItemPopUp = true
    this.selectItem.push(item)
    if(this.selectItemId.length == 0){

        this.selectItemId.push(item.id)
    }
   
   
  },

  closePopup(){
    this.ItemPopUp = false
     this.selectItemId = null
   
   
  }

})

export{store}