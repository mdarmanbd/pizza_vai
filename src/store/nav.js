import{reactive} from 'vue'


const nav = reactive({
    SearchLocation : '',
    NavLocation: false,
    LocatedArrow : false,
    LocationView : false,
    CloseLocationView : false,
    LogIn : false,
    SignUp : false,

   Location(){
    this.NavLocation = true
    this.LogIn = false
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
   },
   LogInBtn(){
    this.LogIn = true
    this.NavLocation = false
    this.LocationView = false

    
   },
   SignUpBtn(){
    this.LogIn = true
    this.NavLocation = false
    this.LocationView = false
   },
   closeLogIn(){
    this.LogIn = false
    
   }
    
})

export{nav}