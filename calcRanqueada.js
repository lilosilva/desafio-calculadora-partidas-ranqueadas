function getSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function getRank(saldo) {   
    
    let rank;

    if (saldo < 10) { 
        rank = "Ferro";
    } else if (saldo > 10 && saldo <= 20) {
        rank = "Bronze";
    } else if (saldo > 20 && saldo <= 50) {
        rank = "Prata";
    } else if (saldo > 50 && saldo <= 80) {
        rank = "Ouro";
    } else if (saldo > 80 && saldo <= 90) {
        rank = "Diamante";
    } else if (saldo > 90 && saldo <= 100) {
        rank = "Lendário";
    } else if (saldo >= 101) {
        rank = "Imortal";
    }
            
    return rank;
    
}

let saldo = getSaldo(85, 10);
let rank = getRank(saldo);

console.log("O Herói tem de saldo de " + saldo + " está no nível de "+ rank);
