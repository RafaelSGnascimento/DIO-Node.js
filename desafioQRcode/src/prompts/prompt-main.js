const mainPrompt = [
    {
        name: "select",
        description: "escolha a ferramenta (1- QRcode ou 2- PASSWORD",
        pattern: /^[1-2]+$/,
        message: "escolha apenas entre 1 e 2",
        require: true,
    }
]
export default mainPrompt;