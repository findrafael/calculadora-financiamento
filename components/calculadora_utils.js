const calculadora_utils = (valorInicial, taxaJuros, periodoMeses) => {

    const taxaJurosDecimal = parseInt(taxaJuros) / 100;
    periodoMeses = parseInt(periodoMeses);
    const auxiliar1 = ((1 + taxaJurosDecimal) ** periodoMeses) * taxaJurosDecimal;
    const auxiliar2 = ((1 + taxaJurosDecimal) ** periodoMeses) - 1;
    const parcela = ((valorInicial * auxiliar1) / auxiliar2).toFixed(2);

    const valorJuros = ((parcela * periodoMeses) - valorInicial).toFixed(2);

    if(isNaN(parcela)) {
      return "Preencha todos os campos";
    } else {
      return `O valor da sua parcela é de: R$ ${parcela} \nVocê pagará em: ${periodoMeses} meses. \nO valor total de juros é de: R$ ${valorJuros}`;
    }

  };

  export default calculadora_utils;