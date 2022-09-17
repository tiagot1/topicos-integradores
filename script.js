const cotacaoBtn = [5.12, 4.8, 4.6, 5.2, 3.5, 5.1];
const maiorPreco = Math.max.apply(null, cotacaoBtn);
const menorPreco = Math.min.apply(null, cotacaoBtn);
console.log(menorPreco);
for (i = 0; i < cotacaoBtn.length; i++) {
  const maior = maiorPreco;
  const menor = menorPreco;
  const idxMaior = cotacaoBtn.indexOf(maior);
  const idxMenor = cotacaoBtn.indexOf(maior);

  if (maior === maiorPreco) {
    console.log(
      'O melhor dia para comprar Bitcoin é o dia ' +
        (idxMenor + 2) +
        ' valor: ' +
        menorPreco,
    );
    console.log(
      'O melhor dia para vender Bitcoin é o dia ' +
        (idxMaior + 1) +
        ' valor: ' +
        maiorPreco,
    );
    break;
  }
}
