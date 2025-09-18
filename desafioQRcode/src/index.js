import prompt from "prompt";
import chalk from "chalk";
import createQrCode from "./services/qr-code/create.js";
import mainPrompt from "./prompts/prompt-main.js";
import createPassword from "./services/password/create.js";


async function main(params) {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQrCode();
        if(choose.select == 2) await createPassword();
    })
    prompt.start();
}
main();