import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
export default function App() {
  const [ocultarSenha, setOcultarSenha] = useState(true);
  return (
    <View style={styles.container}>
      
      <View style={styles.LogoContainer}>
          <Text>LOGIN</Text>
          <Text>Insira seus dados para continuar</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder='user@exemplo.com.br'
        />
        <Text style={styles.title}>SENHA</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={ocultarSenha}
          
        />
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    LogoContainer:{
      margin:5,
      padding:10,
    },
    input:{
      padding:10,
      margin:1,
      borderRadius: 2,
      marginBottom: 10, // Espaçamento entre os itens
      borderBottomWidth: 2, // Espessura da borda inferior
      borderBottomColor: 'black'
    },

    botao:{
      padding:10,
      textAlign:'center',
      marginTop:5,
      backgroundColor:'red',
      borderRadius: 3,
    },

    textoBotao:{
      textAlign:'center',
    },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
