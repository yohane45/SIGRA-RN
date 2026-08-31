import React, { useState } from 'react';

import {
View,
Text,
TextInput,
Pressable,
StyleSheet,
Alert,
} from 'react-native';

import colors from '../styles/colors';
import { router } from 'expo-router';

const LoginScreen = () => {
const [usuario, setUsuario] = useState('');
const [contrasena, setContrasena] = useState('');
const handleLogin = () => {

    if (usuario === '' || contrasena === '') {
    Alert.alert(
        'SIGRA',
        'Por favor ingrese usuario y contraseña.'
    );
    return;
    }
    router.push('/dashboard');
};

return (
    <View style={styles.container}>
    <Text style={styles.logo}>
        SIGRA
    </Text>
    <Text style={styles.subtitle}>
        Seguridad y Salud en el Trabajo
    </Text>
    <View style={styles.form}>

        <Text style={styles.label}>
        Usuario
        </Text>

        <TextInput
        style={styles.input}
        placeholder="Ingrese su usuario"
        placeholderTextColor={colors.textoSecundario}
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
        />

        <Text style={styles.label}>
        Contraseña
        </Text>

        <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        placeholderTextColor={colors.textoSecundario}
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        />

        <Pressable
        style={styles.button}
        onPress={handleLogin}
        >
        <Text style={styles.buttonText}>
            INGRESAR
        </Text>
        </Pressable>

    </View>

    </View>
);
};

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: colors.fondo,
    justifyContent: 'center',
    padding: 24,
},
logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.primario,
    textAlign: 'center',
},
subtitle: {
    fontSize: 16,
    color: colors.textoSecundario,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
},
form: {
    width: '100%',
    backgroundColor: colors.superficie,
    padding: 24,
    borderRadius: 12,
    marginTop: 30,
},
label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.texto,
    marginBottom: 8,
},
input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.borde,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.texto,
    marginBottom: 20,
},
button: {
    height: 50,
    backgroundColor: colors.primario,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
},
buttonText: {
    color: colors.superficie,
    fontSize: 16,
    fontWeight: 'bold',
},

});

export default LoginScreen;