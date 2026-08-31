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

const RiesgosScreen = () => {

const riesgos = [
    {
    id: 1,
    nombre: 'Caída al mismo nivel',
    nivel: 'Medio',
    estado: 'Abierto',
    fecha: '25/08/2026',
    },
    {
    id: 2,
    nombre: 'Manipulación de cargas',
    nivel: 'Alto',
    estado: 'En tratamiento',
    fecha: '26/08/2026',
    },
    {
    id: 3,
    nombre: 'Riesgo eléctrico',
    nivel: 'Crítico',
    estado: 'Abierto',
    fecha: '28/08/2026',
    },
];

return (
    <ScrollView style={styles.container}>

    <Text style={styles.title}>
        Gestión del Riesgo
    </Text>

    <Text style={styles.description}>
        Registro y seguimiento de los riesgos identificados
    </Text>

    {riesgos.map((riesgo) => (

        <View
        key={riesgo.id}
        style={styles.card}
        >

        <Text style={styles.riskName}>
            {riesgo.nombre}
        </Text>


        <View style={styles.infoRow}>

            <Text style={styles.infoLabel}>
            Nivel:
            </Text>

            <View
            style={[
                styles.badge,
                riesgo.nivel === 'Crítico'
                ? styles.badgeCritico
                : riesgo.nivel === 'Alto'
                ? styles.badgeAlto
                : styles.badgeMedio,
            ]}
            >

            <Text style={styles.badgeText}>
                {riesgo.nivel}
            </Text>

            </View>

        </View>


        <View style={styles.infoRow}>

            <Text style={styles.infoLabel}>
            Estado:
            </Text>

            <View style={styles.badgeEstado}>

            <Text style={styles.badgeText}>
                {riesgo.estado}
            </Text>

            </View>

        </View>

        <Text style={styles.info}>
            Fecha: {riesgo.fecha}
        </Text>

          {/* ACCIONES */}

        <View style={styles.actions}>

            <Pressable
            style={styles.buttonView}
            onPress={() =>
                Alert.alert(
                'Ver riesgo',
                `Riesgo seleccionado: ${riesgo.nombre}`
                )
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
                'Editar riesgo',
                `Editar: ${riesgo.nombre}`
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
                'Eliminar riesgo',
                `Eliminar: ${riesgo.nombre}`
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
riskName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.texto,
    marginBottom: 12,
},
info: {
    fontSize: 14,
    color: colors.textoSecundario,
    marginBottom: 6,
},
infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
},
infoLabel: {
    fontSize: 14,
    color: colors.texto,
    marginRight: 8,
    fontWeight: '600',
},
badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
},
badgeCritico: {
    backgroundColor: colors.peligro,
},
badgeAlto: {
    backgroundColor: colors.advertencia,
},
badgeMedio: {
    backgroundColor: colors.primario,
},
badgeEstado: {
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


export default RiesgosScreen;