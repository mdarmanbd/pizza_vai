
import{reactive,ref,computed} from 'vue'

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

        // console.log(CartItemIndex)
        // localStorage.setItem('cartItem',JSON.stringify(this.cartItem))
        this.showItemPopup = false

        

    },

    totalCount:computed(()=>{
        let totalC = 0
        for (let index in addToCart.cartItem){
            totalC += addToCart.cartItem[index].count
        }
        return totalC
    }),

    // calculateTotalCount() {
    //     return this.cartItem.reduce((total, item) => total + item.count, 0);
    // },
    
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