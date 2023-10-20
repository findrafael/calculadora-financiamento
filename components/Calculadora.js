// components/Calculadora.js

import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Calculadora = () => {
  const [valorInicial, setValorInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodoMeses, setPeriodoMeses] = useState("");
  const [resultado, setResultado] = useState("");
  const [valorJuros, setValorJuros] = useState("");

  const calcular = () => {

    const taxaJurosDecimal = parseInt(taxaJuros) / 100;
    const auxiliar1 = ((1 + taxaJurosDecimal) ** periodoMeses) * taxaJurosDecimal;
    const auxiliar2 = ((1 + taxaJurosDecimal) ** periodoMeses) - 1;
    const parcela = ((valorInicial * auxiliar1) / auxiliar2).toFixed(2);

    const valorJuros = ((parcela * periodoMeses) - valorInicial).toFixed(2);

    if(isNaN(parcela)) {
      setResultado(">>> Erro ao calcular, verifique! <<<");
      setValorJuros(">>> Erro ao calcular, verifique! <<<");
    } else {
      setResultado(parcela);
      setValorJuros(valorJuros);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Financeira</Text>
      <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Valor a ser financiado"
        keyboardType="numeric"
        onChangeText={(text) => setValorInicial(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros x% a.m."
        keyboardType="numeric"
        onChangeText={(text) => setTaxaJuros(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Período em meses"
        keyboardType="numeric"
        onChangeText={(text) => setPeriodoMeses(text)}
      />
      <Button
        title="Calcular"
        onPress={calcular}
        style={styles.botao}
      />
      <Text style={styles.resultado}>O valor da sua parcela, será de:</Text>
      <Text style={styles.resultado}>{resultado}</Text>
      <Text style={styles.resultado}>O valor dos juros, será de:</Text>
      <Text style={styles.resultado}>{valorJuros}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    width: 200,
    height: 40,
    backgroundColor: "#fcba03",
    color: "#fcba03",
    borderRadius: 5,
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Calculadora;
