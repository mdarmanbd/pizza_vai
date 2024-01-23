import{reactive} from 'vue'


const nav = reactive({
    SearchLocation : '',
    NavLocation: false,
    LocatedArrow : false,
    LocationView : false,
    CloseLocationView : false,

   Location(){
    this.NavLocation = true
   },
   RightSearchArrow(){
    if(!this.SearchLocation.length){
        this.NavLocation = false
    }else{
        this.NavLocation = true
    }
   },
   CrossArrow(){
    this.LocatedArrow = true
    this.SearchLocation = ''
   
   },
   FindLocation(){
    this.LocationView = true
    this.NavLocation = false
   },
   CloseLocation(){
    this.LocationView = false
    this.LocatedArrow = !this.LocatedArrow
    this.SearchLocation = ''
   }
    
})

export{nav}