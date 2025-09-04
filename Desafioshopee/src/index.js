import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("ferrari HotWheels", 39.99, 12);
const item2 = await createItem("lamborghini HotWheels", 39.99, 1);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

await cartServices.displayCart(myCart);


await cartServices.calculateTotal(myCart);