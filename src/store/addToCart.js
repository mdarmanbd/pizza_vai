
import{reactive,ref,computed} from 'vue'
import { store } from './store'

const addToCart = reactive({ 
    cartItem : [],
    localStorageCartItem : [],
    showItemPopup : true,


    addCart(singleProduct, popupCount){

        const CartItemIndex = this.cartItem.findIndex(item)
        function item (itemId) {
            return itemId.item.id == singleProduct.id
        }
        if (CartItemIndex == -1){
            this.cartItem.push({
                item: singleProduct,
                count: popupCount,
            })
        }else{
            this.cartItem[CartItemIndex].count += popupCount;
        }
        this.showItemPopup = false
        store.ItemPopUp = false
    },

    totalCount:computed(()=>{
        let totalC = 0
        for (let index in addToCart.cartItem){
            totalC += addToCart.cartItem[index].count
        }
        return totalC
    }),


    
    itemCountIncriment(item){
        return item.count++
    },
    itemDecrement(item){
        return item.count--
    },
    removeItem(index){
       return this.cartItem.splice(index, 1)
      
    }
    
})

export{addToCart}