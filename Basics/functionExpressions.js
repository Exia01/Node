/* This is a normal function */
function sayHi() {
    console.log('hi')
}
sayHi()



/* Function expression */
/* let sayBye = function () {
    console.log('bye')
} */

let sayBye =()=>{
    console.log('bye')
}


let callFunction = (func) => {
    func()
}
callFunction(sayBye)