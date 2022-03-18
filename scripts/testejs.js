  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.


let valor = [ 7, -5, 6, -3.4, 4.6, 12]

let quantidadePositivos = 0;
// const valorInformadoPeloUsuario = gets(0);

for (let i = 0; i < 6; i++) {
    if(valorInformadoPeloUsuario >= 0) {
        quantidadePositivos++
    }
  



}

console.log(`${quantidadePositivos} valores positivos`);