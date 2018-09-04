var kittens = ['Milo', 'Otis', 'Garfield']

//appends to kittens 

function destructivelyAppendKitten(array) {kittens.push('Ralph') 
return array 
  //prepend to kittens
}
function destructivelyPrependKitten(array) {kittens.unshift('Bob') 
return array

//removes last kitten 
}
function destructivelyRemoveLastKitten(array) {kittens.pop()
return array
}

//removes first kitten 
function destructivelyRemoveFirstKitten(array) {kittens.shift()
return array 
}
function appendKitten(array) {kittens = kittens.splice(3, 0, 'Broom') 
 return kittens  
}
function prependKitten(name) {kittens = kittens.splice(0)
return kittens
}