import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("ferrari HotWheels", 10, 10, 10);
const item2 = await createItem("lamborghini HotWheels", 10, 10, 10);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.removeItem(myCart, item1 );
await cartServices.removeItem(myCart, item1 );

await cartServices.addItemQuantity(item2);

await cartServices.displayCart(myCart);


await cartServices.calculateTotal(myCart);