let winBalance = playerBalance(109, 7);

function playerBalance(win,lose){
    let rankedBalance = win - lose
    return rankedBalance
} 

if (winBalance <= 10){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Ferro");
} else if (winBalance >= 11 && winBalance <= 20){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Bronze");
} else if (winBalance >= 21 && winBalance <= 50){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Prata");
} else if (winBalance >= 51 && winBalance <= 80){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Ouro");
} else if (winBalance >= 81 && winBalance <= 90){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Diamante");
} else if (winBalance >= 91 && winBalance <= 100){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Lendário");
} else if (winBalance >= 101){
    console.log("O Herói tem de saldo de " + winBalance + " está no nível de Imortal")
}
