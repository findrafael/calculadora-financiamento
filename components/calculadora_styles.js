import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
      },
      titulo: {
        fontSize: 28,
        fontWeight: "bold",
        margin: 20,
      },
      input: {
        width: 250,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 10,
      },
      pressable: {
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 15,
        margin: 10,
        borderRadius: 5,
      },
      texto_press: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
      },
      titulo_resultados: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
      },
      resultado: {
        paddingTop: 10,
        fontSize: 16,
        textAlign: "center",
      },
    });

    export default styles;