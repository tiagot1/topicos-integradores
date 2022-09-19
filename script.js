const cotacaoBtn = [5.12, 4.8, 4.6, 5.2, 3.5, 5.1];
const maiorPreco = Math.max.apply(null, cotacaoBtn);
const menorPreco = Math.min.apply(null, cotacaoBtn);
const tenhoBtc = menorPreco;
const maior = maiorPreco;
const menor = menorPreco;
const idxMaior = cotacaoBtn.indexOf(maior);
const idxMenor = cotacaoBtn.indexOf(menor);
console.log(
  'O melhor dia da semana para comprar Bitcoin é o dia: ' +
    (idxMenor + 1) +
    ' valor: ' +
    menorPreco,
);

if (tenhoBtc !== false) {
  function venderBtc() {
    const num = cotacaoBtn.slice(idxMenor);
    const vender = num.reduce((acc, att) => {
      return acc > att ? acc : att;
    }, 0);
    const lucro = vender - menorPreco;
    console.log(
      'O melhor dia da semana para vender Bitcoin é o dia: ' +
        (idxMaior + 1) +
        ' valor: ' +
        vender +
        ' ' +
        lucro.toFixed(2),
    );
    console.log(num);
  }
  venderBtc();
} else {
  console.log('Você precisa comprar Bitcoin antes de vender.');
}
