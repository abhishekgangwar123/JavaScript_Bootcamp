function sum (a,b) {
   sum = a+b;
   return sum;
}

console.log(sum(2,3));

const cart = [
    {   
        id:1,
        name: 'Iphone',
        price: 100,
        qty:2
    },
    {   
        id:2,
        name: 'Apple Watch',
        price: 200,
        qty:3
    },
    {   
        id:3,
        name: 'Macbook',
        price: 50,
        qty:4
    }
]

function totalAmount(cart) {
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice = totalPrice + item.price * item.qty;
    }
    return totalPrice;
}

console.log(totalAmount(cart));