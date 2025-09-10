async function addItem(userCart,item) {
    userCart.push(item);
}

async function addItemQuantity(item) {
    item.quantity += 1;
    item.subtotal = item.quantity * item.price;
    return;
}

async function deleteCart(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1){
        userCart.splice(index,1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if(indexFound === -1){
        console.log("item nao encontrado!");
        return;
    }if(item.quantity > 1){
        item.quantity -= 1;
        item.subtotal = item.quantity * item.price;
        return;
    }else{
        deleteCart(userCart, item.name);
        return;
    }
}

async function calculateTotal(userCart) {
    console.log("Shopee Cart total is: ");
    const result = userCart.reduce((total, item)=> total + item.subtotal, 0);
    console.log(`\n Total ${result}`);
}

async function displayCart(userCart) {
    console.log("Shopee Cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} | Preço: R$ ${item.price} | quantidade: ${item.quantity} | subtotal: R$${item.subtotal}.`)
    });
}

export {
    addItem,
    deleteCart,
    removeItem,
    calculateTotal,
    displayCart,
    addItemQuantity,
}