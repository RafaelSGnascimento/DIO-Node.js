import QR from "qrcode-terminal";
import chalk from "chalk";

async function handler(err , result) {
    if(err){
        console.log("error on aplication");
        return;
    }

    const isSmall = result.type == 2;
QR.generate(result.link, {small: isSmall}, (qrcode) =>{ 
    console.log(chalk.green("QRcode gerado com sucesso:\n"));
    console.log(qrcode);
});
}
export default handler;