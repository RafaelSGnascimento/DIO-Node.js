const dataBaseType = {
    userType: "admin",
    typeData: "dataLocal",
};

async function connectToDataBase(DataName) {
    console.log(`conectando a ${DataName}`);
}

async function disconnectDataBase(params) {
    console.log("desconectando");
}

export {connectToDataBase,disconnectDataBase, dataBaseType};