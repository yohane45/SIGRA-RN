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

const InspeccionesScreen = () => {

const inspecciones = [
    {
    id: 1,
    nombre: 'Inspección de seguridad',
    area: 'Producción',
    fecha: '28/08/2026',
    responsable: 'Equipo SST',
    estado: 'Completada',
    },
    {
    id: 2,
    nombre: 'Inspección de equipos',
    area: 'Mantenimiento',
    fecha: '29/08/2026',
    responsable: 'Coordinador SST',
    estado: 'Pendiente',
    },
    {
    id: 3,
    nombre: 'Inspección locativa',
    area: 'Administración',
    fecha: '30/08/2026',
    responsable: 'Analista SST',
    estado: 'En proceso',
    },
];

return (
    <ScrollView style={styles.container}>

    <Text style={styles.title}>
        Gestión de Inspecciones
    </Text>

    <Text style={styles.description}>
        Registro y seguimiento de las inspecciones realizadas
    </Text>


    {inspecciones.map((inspeccion) => (

        <View
        key={inspeccion.id}
        style={styles.card}
        >

        <Text style={styles.inspectionName}>
            {inspeccion.nombre}
        </Text>


        <View style={styles.infoRow}>

            <Text style={styles.label}>
            Área:
            </Text>

            <Text style={styles.value}>
            {inspeccion.area}
            </Text>

        </View>

        <View style={styles.infoRow}>

            <Text style={styles.label}>
            Fecha:
            </Text>

            <Text style={styles.value}>
            {inspeccion.fecha}
            </Text>

        </View>

        <View style={styles.infoRow}>

            <Text style={styles.label}>
            Responsable:
            </Text>

            <Text style={styles.value}>
            {inspeccion.responsable}
            </Text>

        </View>

        <View style={styles.infoRow}>

            <Text style={styles.label}>
            Estado:
            </Text>

            <View style={styles.badge}>

            <Text style={styles.badgeText}>
                {inspeccion.estado}
            </Text>

            </View>

        </View>

          {/* ACCIONES */}

        <View style={styles.actions}>

            <Pressable
            style={styles.buttonView}
            onPress={() =>
                router.push({
                pathname: '/inspeccion-detalle',
                params: {
                    nombre: inspeccion.nombre,
                    area: inspeccion.area,
                    fecha: inspeccion.fecha,
                    responsable: inspeccion.responsable,
                    estado: inspeccion.estado,
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
                'Editar inspección',
                `Editar: ${inspeccion.nombre}`
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
                'Eliminar inspección',
                `Eliminar: ${inspeccion.nombre}`
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
inspectionName: {
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

export default InspeccionesScreen;