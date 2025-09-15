import chalk from "chalk";


async function connectToDataBase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log(chalk.green("logado com sucesso!"));
    }else{
        console.log(chalk.red("falha de login!"));
    }
}

export default connectToDataBase;