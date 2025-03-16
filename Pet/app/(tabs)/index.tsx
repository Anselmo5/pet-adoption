import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default function App() { // navigation é passado como prop
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.LogoContainer}>
          <Image 
            source={require('../../assets/images/ico.png')} 
            style={styles.Logo} 
          />
          <Text style={styles.loginText}>LOGIN</Text>
          <Text style={styles.subText}>Insira seus dados para continuar</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.title}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder='user@exemplo.com.br'
          />

          <Text style={styles.title}>SENHA</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              secureTextEntry={true}
              placeholder="Digite sua senha"
            />
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  rowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },

  LogoContainer: {
    alignItems: 'flex-start',
    marginRight: 30,
    marginBottom: 30,
  },

  Logo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },

  loginText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },

  subText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9D9E9F',
  },

  inputContainer: {
    flex: 1,
    marginBottom: 50,
  },

  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },

  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputSenha: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },

  botao: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#B63BD9',
    borderRadius: 65,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FCF5FD',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#DA77EC',
  },
});
