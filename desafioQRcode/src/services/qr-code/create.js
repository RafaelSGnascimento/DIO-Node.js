import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";
import prompt from "prompt";

async function createQrCode() {
    prompt.get(promptQRCode, handle)
}

export default createQrCode;