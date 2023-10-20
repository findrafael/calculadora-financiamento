import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const App = () => {
  const [valorInicial, setValorInicial] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodoMeses, setPeriodoMeses] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const taxaJurosDecimal = parseInt(taxaJuros) / 100;
    const auxiliar1 = ((1 + taxaJurosDecimal) ** periodoMeses) * taxaJurosDecimal;
    const auxiliar2 = ((1 + taxaJurosDecimal) ** periodoMeses) - 1;
    const parcela = ((valorInicial * auxiliar1) / auxiliar2).toFixed(2);
    setResultado(parcela);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Financeira</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor a ser financiado"
        onChangeText={(text) => setValorInicial(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros x% a.m."
        onChangeText={(text) => setTaxaJuros(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Período em meses"
        onChangeText={(text) => setPeriodoMeses(text)}
      />
      <Button
        title="Calcular"
        onPress={calcular}
        style={styles.botao}
      />
      <Text style={styles.resultado}>Os cálculos seriam de:</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
