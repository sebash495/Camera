import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Bienvenida = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={{fontSize: 15}}>El hogar de tus recuerdos..</Text>

        <View style={styles.cnImagen}>
          <Image
            style={styles.imagen}
            source={require('../assets/img/Img.png')}
          />
          <Text style={{fontSize: 16}}>
            Aun no cuentas con recuerdos guardados
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  contenido: {
    height: 550,
  },
  titulo: {
    fontSize: 22,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  imagen: {
    height: 250,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  cnImagen: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
});

export default Bienvenida;
