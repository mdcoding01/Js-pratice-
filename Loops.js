let key_value = new Map();
key_value.set("UP", "Uttar Perdesh")
key_value.set("DL", "Delhi")
key_value.set("BR", "Bihar")

// console.log(key_value)

for (const [key, value] of key_value) {
    // console.log(`The Key is ${key} The Value is ${value}`)
}

let obj = {
    Name: "sam",
    Email: "sam@google.com"

}
for (const [key, val] of Object.entries(obj)) {
    // console.log(obj, val)
}

let arrays = [10, 20, 30, 40]

arrays.forEach(element => {
    // console.log(element)
});

let art = [1, 2, 3, 4, 5]

const PrinT= (item,index,art) => {
    console.log(`The value is ${item} the index is ${index} The array is ${art}`)
}
art.forEach(PrinT)

