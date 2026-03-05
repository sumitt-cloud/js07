
//global scope

// function getageyear(){
//     return new Date().getFullYear() - this.age
// }
// function getfullname(){
//     return this.fname + " " + this.lname
// }
//due to global function global space polluted! --> problem*(incapsulation!)

// function createuser(fname,lname,age){
//     const  person ={
//         fname:fname,
//         lname:lname,
//         age :age,
//         getageyear:getageyear,
//         getfullname:getfullname,
//     }
//     return person
// }
const person1 = createuser("sumit","gupta",20) 
const person2 = createuser("rumit","sharma",23)
// person1.getageyear == person2.getageyear

createuser.title = "hello" //inserting (key:value)
createuser.methods={ //key
    hello:"hello!..",
    getfullname:function(){
        return this.fname +" "+this.lname
    },
    getageyear:function(){
        return new Data().getFullYear - this.age
    }
}

function createuser(fname,lname,age){
    const  person ={
        fname:fname,
        lname:lname,
        age :age,
        getageyear:createuser.methods.getageyear,
        getfullname:createuser.methods.getfullname,
    }
    return person
}
// person1.getageyear == person2.getageyear
// not global space polluted!
