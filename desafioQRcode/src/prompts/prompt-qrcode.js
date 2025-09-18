import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("digite o link para gerar o QRcode"),
    },
    {
        name: "type",
        description: chalk.yellow("escolha entre um tipo de qrcode 1- normal 2- terminal"),
        patter: /^[1-2]+$/,
        message: chalk.red.italic("escolha apenas entre 1 e 2!"),
        require: true,
    }
];

export default promptQRCode;