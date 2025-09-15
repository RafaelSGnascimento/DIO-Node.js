import prompt from "prompt";
import chalk from "chalk";
import mainPrompt from "./prompts/prompt-main.js";


async function main(params) {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) console.log("escolheu QRcode");
        if(choose.select == 2) console.log("escolheu PASSWORD");
    })
    prompt.start();
}
main();