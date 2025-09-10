async function createItem(name, price, quantity, subtotal) {
    return {
        name,
        price,
        quantity,
        subtotal,
    }
}
export default createItem;