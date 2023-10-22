import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./calculadora_styles.js";
import calculadora_utils from "./calculadora_utils.js";

const Calculadora = () => {
  const [valorInicial, onChangeValorInicial] = useState("");
  const [taxaJuros, onChangeTaxaJuros] = useState("");
  const [periodoMeses, onChangePM] = useState("");
  const [resultado, onChangeResultado] = useState("");

  const chamaCalcular = () => {
    const resultado = calculadora_utils(valorInicial, taxaJuros, periodoMeses);
    onChangeResultado(resultado);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora Financeira</Text>
      <Text></Text>

      <TextInput
        style={styles.input}
        placeholder="Valor a ser financiado"
        inputMode="numeric"
        onChangeText={onChangeValorInicial}
      />

      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros x% a.m."
        inputMode="numeric"
        onChangeText={(text) => onChangeTaxaJuros(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Período em meses"
        inputMode="numeric"
        onChangeText={(text) => onChangePM(text)}
      />

      <Pressable
        style={styles.pressable}
        onPress={chamaCalcular}>
        <Text style={styles.texto_press}>Calcular</Text>
      </Pressable>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>

  );
};

export default Calculadora;
