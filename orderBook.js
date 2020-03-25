//create variables existingBook, incomingOrder
//create function reconcileOrder
//add an element to sell with quantity of 10 and price of 6150
// return updatedBook() type: sell, q:10, p:6150 

function reconcileOrder(existingBook, incomingOrder) {
    if (existingBook[] = 0) {
        if 
    }
}

//add second element to book: sell, quantity 12, price 6000
//return updatedBook type: {sell, q:10, p:6150} { type: 'sell', quantity: 12, price: 6000 }



//create incomingOrder: sell, q12, p6150
//add new element to book if neither q, nor p match
//return updatedBook(){ type: 'buy', quantity: 10, price: 6000 },
//{ type: 'sell', quantity: 12, price: 6150 }


//create incomingOrder: sell, q10, p6150
//remove matching order buy order in order book
//do not add new element to book
//return updatedBook() { type: 'sell', quantity: 12, price: 5950 }



//fulfill order that reduces matching order already in book
//create incomingOrder: sell, q10, p6150
//reduce matching order in book
//return updatedBook() { type: 'sell', quantity: 12, price: 6950 }, { type: 'buy', quantity: 5, price: 6150 }




//create incomingOrder: sell, q15, p6150
//partially fill order (remove some matching items) and add remainder to smaller matching q
//return updatedBook() { type: 'sell', quantity: 12, price: 5950 }, { type: 'sell', quantity: 5, price: 6150 }



//create incomingOrder: sell, q15, p6150
//use (and remove) 2 existing orders to fill
//return updatedBook() { type: 'sell', quantity: 12, price: 5950 }



//create incomingOrder: type: 'sell', quantity: 15, price: 6150
//fulfill removing 1 order from book & reducing another
//return updatedBook() { type: 'sell', quantity: 12, price: 6950 }, { type: 'buy', quantity: 5, price: 6150 }




//create incomingOrder: { type: 'sell', quantity: 25, price: 6150 }
//use 2 existing orders to partially fill, removing them from book
//reduce incoming order and add to book
//return updatedBook() { type: 'sell', quantity: 12, price: 6950 }, { type: 'sell', quantity: 5, price: 6150 }



// EXTRA CREDIT
//create incomingOrder: { type: 'sell', quantity: 15, price: 5900 }
//fulfill mismatched order when both parties benenfit
//reduced price to seller (if p <= 6000)
//return updatedBook() { type: 'sell', quantity: 12, price: 6950 }


//create incomingOrder: { type: 'sell', quantity: 15, price: 6000 }
//does not fulfill order if not beneficial to both parties
//price too high for buyer if p >59000
//return updatedBook() { type: 'buy', quantity: 15, price: 5900 },
//{ type: 'sell', quantity: 12, price: 6950 },
//{ type: 'sell', quantity: 15, price: 6000 }









module.exports = reconcileOrder