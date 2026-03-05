function createuser(fname,lname,age){
    const  person ={
        fname:fname,
        lname:lname,
        age :age,
        // getageyear:createuser.prototype.getageyear,
        // getfullname:createuser.prototype.getfullname,
    }
    return person
}

createuser.prototype.getageYear=function(){
        return new Data().getageYear - this.age
    },
createuser.prototype.getfullname=function(){
        return this.fname +" "+this.lname
    }

const person1 = createuser("sumit","gupta",20) 
const person2 = createuser("rumit","sharma",23)
// person1.getageyear == person2.getageyear
console.dir(person1)
const age = person1.getageYear()

// person1.__proto__ === createuser.prototype --> TRUE!...


const gparent = {
    name:"sumit",
}
const parent = {
    __proto__:gparent,//linking
    lname : "gupta"
}
const me = {
    __proto__:parent,//limking
    city : "DELHI"
}

console.log(me.city)
console.log(me.lname)
console.log(me.fname)