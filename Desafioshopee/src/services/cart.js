async function addItem(userCart,item) {
    userCart.push(item);
}

async function deleteCart(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1){
        userCart.splice(index,1);
    }
}

async function removeItem(userCart, index) {
    
}

async function calculateTotal(userCart) {
    console.log("Shopee Cart total is: ");
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(result);
}

async function displayCart(userCart) {
    console.log("Shopee Cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | quantidade: ${item.quantity} | subtotal: R$${item.subtotal()}.`)
    });
}

export {
    addItem,
    deleteCart,
    removeItem,
    calculateTotal,
    displayCart,
}