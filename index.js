const chai = "chai"
const spies = "chai-spies"
const receivesAFunction = (callback) =>{
    callback()
 
}
function  returnsANamedFunction (){
  const named =  () =>{

  }
  return named
    }
function returnsAnAnonymousFunction() {
    return ()=> {}
}