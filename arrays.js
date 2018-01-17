var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
  var array = [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)  
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(-2)
  }

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}