// call & bind & apply

function greet(age,city){
    console.log(`my name is ${this.name} & my age is ${age}and i'm from ${city}`)
}
const person = {
    name:"SUMIT"//link to greet()
}

//call --> funtion.call(thisargu1,argu2,argu3,....)
greet.call(person,34,"delhi")

// apply
greet.apply(person,[34,"delhi"])

//bind
const newgreet = greet.bind(person,20,"delhi")
newgreet()//calling