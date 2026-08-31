import React from 'react';

import {
View,
Text,
StyleSheet,
ScrollView,
} from 'react-native';
import colors from '../styles/colors';
const DashboardScreen = () => {

return (
    <ScrollView style={styles.container}>

      {/* Encabezado */}

    <View style={styles.header}>

        <View>
        <Text style={styles.title}>
            SIGRA
        </Text>

        <Text style={styles.welcome}>
            ¡Bienvenido!
        </Text>
        </View>

        <View style={styles.userContainer}>
        <Text style={styles.userName}>
            Yohane Gualdron
        </Text>

        <Text style={styles.userRole}>
            Administrador
        </Text>
        </View>

    </View>


      {/* Descripción */}

    <Text style={styles.description}>
        Resumen general de Seguridad y Salud en el Trabajo
    </Text>

      {/* Tarjetas */}

    <View style={styles.cardsContainer}>

        <View style={styles.card}>

        <Text style={styles.cardNumber}>
            12
        </Text>

        <Text style={styles.cardTitle}>
            Riesgos
        </Text>

        <Text style={styles.cardDescription}>
            Riesgos registrados
        </Text>

        </View>


        <View style={styles.card}>

        <Text style={styles.cardNumber}>
            8
        </Text>

        <Text style={styles.cardTitle}>
            Inspecciones
        </Text>

        <Text style={styles.cardDescription}>
            Inspecciones realizadas
        </Text>

        </View>


        <View style={styles.card}>

        <Text style={styles.cardNumber}>
            3
        </Text>

        <Text style={styles.cardTitle}>
            Incidentes
        </Text>

        <Text style={styles.cardDescription}>
            Incidentes registrados
        </Text>

        </View>


        <View style={styles.card}>

        <Text style={styles.cardNumber}>
            15
        </Text>

        <Text style={styles.cardTitle}>
            Capacitaciones
        </Text>

        <Text style={styles.cardDescription}>
            Capacitaciones realizadas
        </Text>

        </View>

    </View>

      {/* Actividad reciente */}

    <View style={styles.activityContainer}>

        <Text style={styles.sectionTitle}>
        Actividad reciente
        </Text>

        <Text style={styles.activity}>
        • Inspección de seguridad realizada
        </Text>

        <Text style={styles.activity}>
        • Capacitación programada
        </Text>

        <Text style={styles.activity}>
        • Riesgo actualizado
        </Text>

        <Text style={styles.activity}>
        • Incidente registrado
        </Text>

    </View>
    <View style={styles.alertContainer}>

<Text style={styles.sectionTitle}>
    Alertas
</Text>

<View style={styles.alertItem}>
    <Text style={styles.alertDanger}>
    🔴 Examen médico pendiente
    </Text>
</View>

<View style={styles.alertItem}>
    <Text style={styles.alertWarning}>
    🟠 Capacitación próxima
    </Text>
</View>

<View style={styles.alertItem}>
    <Text style={styles.alertDanger}>
    🔴 Hallazgo sin cerrar
    </Text>
</View>

<View style={styles.alertItem}>
    <Text style={styles.alertWarning}>
    🟠 Inspección pendiente
    </Text>
</View>

</View>

    </ScrollView>
);
};


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.fondo,
    padding: 20,
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
},
title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primario,
},
welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.texto,
    marginTop: 4,
},
userContainer: {
    alignItems: 'flex-end',
},
userName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.texto,
},
userRole: {
    fontSize: 12,
    color: colors.textoSecundario,
    marginTop: 3,
},
description: {
    fontSize: 14,
    color: colors.textoSecundario,
    marginBottom: 20,
},
cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
card: {
    width: '48%',
    backgroundColor: colors.superficie,
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.borde,
},
cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primario,
},
cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.texto,
    marginTop: 5,
},
cardDescription: {
    fontSize: 12,
    color: colors.textoSecundario,
    marginTop: 5,
},
activityContainer: {
    backgroundColor: colors.superficie,
    borderRadius: 12,
    padding: 20,
    marginTop: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: colors.borde,
},
sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.texto,
    marginBottom: 15,
},
activity: {
    fontSize: 14,
    color: colors.textoSecundario,
    marginBottom: 10,
},
alertContainer: {
backgroundColor: colors.superficie,
borderRadius: 12,
padding: 20,
marginBottom: 30,
borderWidth: 1,
borderColor: colors.borde,
},
alertItem: {
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: colors.borde,
},
alertDanger: {
fontSize: 14,
color: colors.peligro,
fontWeight: '600',
},
alertWarning: {
fontSize: 14,
color: colors.advertencia,
fontWeight: '600',
},

});


export default DashboardScreen;