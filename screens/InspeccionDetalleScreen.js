import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

import colors from '../styles/colors';
import { router, useLocalSearchParams } from 'expo-router';

const InspeccionDetalleScreen = () => {

  const {
    nombre,
    area,
    fecha,
    responsable,
    estado,
  } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Detalle de la Inspección
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Inspección
        </Text>

        <Text style={styles.value}>
          {nombre}
        </Text>


        <Text style={styles.label}>
          Área
        </Text>

        <Text style={styles.value}>
          {area}
        </Text>


        <Text style={styles.label}>
          Fecha
        </Text>

        <Text style={styles.value}>
          {fecha}
        </Text>


        <Text style={styles.label}>
          Responsable
        </Text>

        <Text style={styles.value}>
          {responsable}
        </Text>


        <Text style={styles.label}>
          Estado
        </Text>

        <View style={styles.badge}>

          <Text style={styles.badgeText}>
            {estado}
          </Text>

        </View>


        <Text style={styles.label}>
          Observaciones
        </Text>

        <Text style={styles.description}>
          Inspección realizada para verificar las
          condiciones de seguridad y salud en el
          área seleccionada.
        </Text>

      </View>


      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >

        <Text style={styles.buttonText}>
          Volver
        </Text>

      </Pressable>

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.fondo,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primario,
    marginBottom: 20,
  },

  card: {
    backgroundColor: colors.superficie,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.borde,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textoSecundario,
    marginTop: 15,
    marginBottom: 6,
  },

  value: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.texto,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secundario,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  badgeText: {
    color: colors.superficie,
    fontSize: 13,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 15,
    color: colors.texto,
    lineHeight: 22,
  },

  button: {
    backgroundColor: colors.primario,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  buttonText: {
    color: colors.superficie,
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default InspeccionDetalleScreen;