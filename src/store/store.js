import{reactive, ref} from 'vue'


const store = reactive({
  ItemPopUp : false,
  selectItem : [],
  selectItemId : ref(),
  OrderShow : false,
  callMe : ref(''),
  callTrue : false,
  popupCount : ref(1),

  silectItemPopUp(item){
    this.ItemPopUp = true
    this.selectItem.push(item)
    this.selectItemId = item.id
  },

  closePopup(){
    this.ItemPopUp = false
  },

  popupOrderShow(){
    this.OrderShow = !this.OrderShow
  },

  popupCallMe(){
    this.OrderShow = false
    this.callMe = 'call me'
    this.callTrue = true
  },

  popupIncrementBtn(){
    ++this.popupCount
  },

  popupDicrementBtn(){
   
    if(this.popupCount == 1){
      this.popupCount = 1
    }else{
      --this.popupCount
    }
  }
  

})

export{store}