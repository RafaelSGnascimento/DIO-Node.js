const P = require("./services/products");
const server = require("./services/dataBaseControl");

async function main(params) {
    server.connectToDataBase("servidor goiano")
    P.getFullName(408, "Mouse Pad");
    server.disconnectDataBase;
}
main();