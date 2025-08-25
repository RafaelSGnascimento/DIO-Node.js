const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "lUIG",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou um dado🎲 de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} !`);
}

//randomiza a pista.
async function getRandomBlock(params) {
    let random = Math.random();
    let result

    switch(true){
        case random < 0.33:
            result = "Reta";
            break;

        case random < 0.66:
            result =  "Curva";
            break;

        default:
            result = "Confronto";
    }
    return result;
}

async function declareWinner(character1, character2) {
    console.log("resultado final:")
    console.log(`${character1.NOME}:${character1.PONTOS} pontos!`);
    console.log(`${character2.NOME}:${character2.PONTOS} pontos!`);

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} é o grande campeão 👑!!!`);
    }else if(character1.PONTOS < character2.PONTOS){
        console.log(`\n${character2.NOME} é o grande campeão 👑!!!`);
    }else{
        console.log(`\n Empate!`);
    }
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁rodada ${round}!`);

        let block = await getRandomBlock();
        console.log(`E sua pista sera...${block}!`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
    
        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;
    
        if(block === "Reta"){
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE;
    
            await logRollResult(character1.NOME,
                "VELOCIDADE",
                diceResult1,
                character1.VELOCIDADE);
                await logRollResult(character2.NOME,
                    "VELOCIDADE",
                    diceResult2,
                    character2.VELOCIDADE);

                    if(TotalTestSkill1 > TotalTestSkill2){
                        console.log(`${character1.NOME} marcou 1 ponto!`);
                        character1.PONTOS++;
                    }else{
                        console.log(`${character2.NOME} marcou 1 ponto!`);
                        character2.PONTOS++;
                    }
        }
        if(block === "Curva"){
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
    
            await logRollResult(character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE);

            if(TotalTestSkill1 > TotalTestSkill2){
                console.log(`${character1.NOME} marcou 1 ponto!`);
                character1.PONTOS++;
            }else{
                console.log(`${character2.NOME} marcou 1 ponto!`);
                character2.PONTOS++;
            }
        }
        if(block === "Confronto"){
            let PowerResult1 = diceResult1 + character1.PODER;
            let PowerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} ta saindo nao mão com ${character2.NOME} !🥊`);

            await logRollResult(character1.NOME,
                "Poder",
                diceResult1,
                character1.PODER);
            await logRollResult(character2.NOME,
                "Poder",
                diceResult2,
                character2.PODER);
                
                if(PowerResult1 > PowerResult2 && character2.PONTOS > 0){
                    character2.PONTOS--; 
                    console.log(`${character1.NOME} Deitou a porrada!`);
                }
                if(PowerResult2 > PowerResult1 && character1.PONTOS > 0){
                    character1.PONTOS--; 
                    console.log(`${character2.NOME} Deitou a porrada!`);
                }
                console.log(PowerResult1 === PowerResult2 ? "empate no confronto!" : "");
            }

        console.log("----------------------------------")
    }
}

//Devolve o numero dos dados rolados exigidos pelo jogo.
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

//Função MAIN.
(async function main(params) {
    console.log(`🏁❕ corrida entre:${player1.NOME} e ${player2.NOME} esta começando!!!`);

    //Chama uma função dentro de outra função
    //await exique que o codigo espere sua execução para assim dar continuidade.
    await playRaceEngine(player1, player2);

    declareWinner(player1,player2);
})();