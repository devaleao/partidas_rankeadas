function gerarNumeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gerar número aleatório de vitórias entre 0 e 100
let vitorias = gerarNumeroAleatorioEntre(0, 100);

// Calcular derrotas para que a soma seja 100
let derrotas = 120 - vitorias;

console.log(`Vitórias: ${vitorias}`);
console.log(`Derrotas: ${derrotas}`);

function calculaNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias > 100) {
    nivel = "Imortal";
  }

  console.log(
    "O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel
  );
}

calculaNivel(vitorias, derrotas);
