import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import colors from '../styles/colors';
import { router } from 'expo-router';

const IncidentesScreen = () => {

  const incidentes = [
    {
      id: 1,
      nombre: 'Incidente por caída',
      fecha: '27/08/2026',
      area: 'Producción',
      tipo: 'Accidente',
      estado: 'En investigación',
    },
    {
      id: 2,
      nombre: 'Incidente por golpe',
      fecha: '28/08/2026',
      area: 'Mantenimiento',
      tipo: 'Incidente laboral',
      estado: 'Cerrado',
    },
    {
      id: 3,
      nombre: 'Incidente locativo',
      fecha: '29/08/2026',
      area: 'Administración',
      tipo: 'Condición insegura',
      estado: 'En seguimiento',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Gestión de Incidentes
      </Text>

      <Text style={styles.description}>
        Registro y seguimiento de incidentes relacionados con la seguridad y salud en el trabajo
      </Text>

      {incidentes.map((incidente) => (

        <View
          key={incidente.id}
          style={styles.card}
        >

          <Text style={styles.incidentName}>
            {incidente.nombre}
          </Text>

          <View style={styles.infoRow}>

            <Text style={styles.label}>
              Fecha:
            </Text>

            <Text style={styles.value}>
              {incidente.fecha}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Text style={styles.label}>
              Área:
            </Text>

            <Text style={styles.value}>
              {incidente.area}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Text style={styles.label}>
              Tipo:
            </Text>

            <Text style={styles.value}>
              {incidente.tipo}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Text style={styles.label}>
              Estado:
            </Text>

            <View style={styles.badge}>

              <Text style={styles.badgeText}>
                {incidente.estado}
              </Text>

            </View>

          </View>

          {/* ACCIONES */}
        <View style={styles.actions}>

            <Pressable
            style={styles.buttonView}
            onPress={() =>
                router.push({
                pathname: '/incidente-detalle',
                params: {
                    nombre: incidente.nombre,
                    fecha: incidente.fecha,
                    area: incidente.area,
                    tipo: incidente.tipo,
                    estado: incidente.estado,
                },
                })
            }
            >

            <Text style={styles.buttonText}>
                Ver
            </Text>

            </Pressable>

            <Pressable
            style={styles.buttonEdit}
            onPress={() =>
                Alert.alert(
                'Editar incidente',
                `Editar: ${incidente.nombre}`
                )
            }
            >

            <Text style={styles.buttonText}>
                Editar
            </Text>

            </Pressable>

            <Pressable
            style={styles.buttonDelete}
            onPress={() =>
                Alert.alert(
                'Eliminar incidente',
                `Eliminar: ${incidente.nombre}`
                )
            }
            >
            <Text style={styles.buttonText}>
                Eliminar
            </Text>

            </Pressable>

        </View>

        </View>

    ))}

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
    marginBottom: 8,
},
description: {
    fontSize: 14,
    color: colors.textoSecundario,
    marginBottom: 20,
},
card: {
    backgroundColor: colors.superficie,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.borde,
},
incidentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.texto,
    marginBottom: 12,
},
infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
},
label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.texto,
    marginRight: 6,
},
value: {
    fontSize: 14,
    color: colors.textoSecundario,
    flex: 1,
},
badge: {
    backgroundColor: colors.secundario,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
},
badgeText: {
    color: colors.superficie,
    fontSize: 12,
    fontWeight: 'bold',
},
actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
},
buttonView: {
    flex: 1,
    backgroundColor: colors.primario,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
},
buttonEdit: {
    flex: 1,
    backgroundColor: colors.secundario,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
},
buttonDelete: {
    flex: 1,
    backgroundColor: colors.peligro,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
},
buttonText: {
    color: colors.superficie,
    fontSize: 12,
    fontWeight: 'bold',
},

});

export default IncidentesScreen;