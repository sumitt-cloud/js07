class createuser {//funtion
    
    constructor(firstname,lastname){
        this.fname = firstname,
        this.lname = lastname 
    }
    getfullname(){
    return this.fname + " " +this.lname
    }
}


const user1 = new createuser("sumit","gupta") // instance
const user2 = new createuser("rumit","gupta") // instance
const name = user1.getfullname()