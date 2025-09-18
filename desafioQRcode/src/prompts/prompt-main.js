import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow("escolha a ferramenta (1- QRcode ou 2- PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha apenas entre 1 e 2"),
        require: true,
    }
]
export default mainPrompt;