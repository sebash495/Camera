import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Espera..</Text>
  </View>
);

const Foto = () => {
  //Metodo para capturar 
  takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    Alert.alert('Imagen guardada en la ruta', JSON.stringify(data.uri));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        //Permiso para poder grabar la camara 
        androidCameraPermissionOptions={{
          title: 'Permiso para usar la cámara',
          message: 'Necesitamos su permiso para usar su cámara',
          buttonPositive: 'Ok',
          buttonNegative: ' Cancelar',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}></TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

//Estilos para mostrar la camara 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#FFFFFE',
    borderRadius: 30,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    width: 50,
    height: 50,
  },
});

export default Foto;
