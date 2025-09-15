import connectToDataBase from "./dataBase/data.js";

async function main(params) {
    connectToDataBase(process.env.USERDATABASE,process.env.PASSWORDDATABASE);
}
main();