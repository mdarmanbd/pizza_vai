
import{reactive,ref} from 'vue'

const addToCart = reactive({
    cartItem : [],
    showItemPopup : true,
    hungryComponent : true,

    addCart(singleProduct, popupCount){
        this.cartItem.push({
            item : singleProduct,
            count : popupCount,
        }),

        this.showItemPopup = false
        this.hungryComponent = false
       
    }
    
})

export{addToCart}