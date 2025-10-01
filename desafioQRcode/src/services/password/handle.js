import permittedCharacters from "./utils/permittedCharacters.js";

async function handle(params) {
    permittedCharacters();
    let characters = [];
    let password = "";
    
    const passwordlengh = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for(let i = 0; i < passwordlengh; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}
export default handle;