import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const logoUrl = 'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [statusLogin, setStatusLogin] = useState('');

  const realizarLogin = () => {
    if (usuario === 'admin' && senha === '1234') {
      setStatusLogin('Login realizado com sucesso');
    } else {
      setStatusLogin('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: logoUrl }} style={styles.logo} />
      <Text style={[styles.titulo, { color: '#FFA500' }]}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(texto) => setUsuario(texto)}
        value={usuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry={true}
        value={senha}
      />
      <Button title="Entrar" onPress={realizarLogin} color="#6A5ACD" />
      <Text style={styles.status}>{statusLogin}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
    borderColor: 'white',
    borderWidth: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingLeft: 8,
    color: 'white',
  },
  status: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Login;
