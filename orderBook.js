function reconcileOrder(existingBook, incomingOrder) {
  let orderIndex = findMatch(existingBook, incomingOrder)

  if (orderIndex === -1) {
    existingBook.push(incomingOrder)
    return existingBook
  }
  else {

    let matchingOrderArr = existingBook.splice(orderIndex, 1)
    let matchingOrder = matchingOrderArr[0]

    // I don't need this code, just wanted to show I did test for this condition
    // if (matchingOrder.quantity === incomingOrder.quantity) {
    // }

    if (matchingOrder.quantity > incomingOrder.quantity) {
      matchingOrder.quantity = matchingOrder.quantity - incomingOrder.quantity
      existingBook.push(matchingOrder)
    }

    else if (matchingOrder.quantity < incomingOrder.quantity) {
      incomingOrder.quantity = incomingOrder.quantity - matchingOrder.quantity
      existingBook = reconcileOrder(existingBook, incomingOrder)
    }

    return existingBook
  }






  function findMatch(existingBook, incomingOrder) {
    for (let i = 0; i < existingBook.length; i++) {
      if (existingBook[i].type !== incomingOrder.type &&
        existingBook[i].price === incomingOrder.price)
        return i
    }
    return -1
  }

}







module.exports = reconcileOrder