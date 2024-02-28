import{reactive, ref} from 'vue'
import { addToCart } from './addToCart'


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

    this.selectItem.push({
      item : item,
      
    })

    // click the popup & fire the hidePlushIcon hidden
    item.hidePlusIcon = false

    console.log(item)

    this.selectItemId = item.id
    // popup show
    addToCart.showItemPopup = true
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