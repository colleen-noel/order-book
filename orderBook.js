function reconcileOrder(existingBook, incomingOrder) {
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)
  }
  return existingBook
}

//if book has type element sell in it, add incoming order









module.exports = reconcileOrder