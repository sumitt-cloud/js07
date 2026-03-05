// react .js
// inheritance!
// class A -->properties--main class
// class B -->properties -- derived class inherited form A

class parent {
    constructor( fname ){
        this.fname =fname
    }
    info(){
        console.log(this.fname)
    }
}
const person1 = new parent("sumit")

class child extends parent{// inherited from parent
    //must call super constructor in 
    // derived classs befor access this returning 
    // from derived constructor
    constructor(x,y){
        super()   
        this.x = x;
        this.y = y;
    }
    info(){
        super.info()// call parent info()--> accessing!
        console.log(this.x)// call child info()
    }
}

const person2 = new child("sumit","gupta")