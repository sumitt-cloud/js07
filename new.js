// new funtion_name -->constructor!
function greet(){
    // console.log(this)
    this.fname = "sumit"
    // return "morning!."
}

new greet()//return object -->this points here

function createuser(firstname,lastname,age){
    this.fname = firstname,
    this.lname=lastname,
    this.age=age
}

createuser.prototype.getfullname = function(){
    return this.fname + " "+this.lname
}
const user1 = new createuser("sumit","gupta",20)
const user2 = new createuser("rumit","gupta",25)

