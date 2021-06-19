import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
//Se esta llamando las dependencias instaladas de la navegación
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Bienvenida from '../componentes/Bienvenida';
import Foto from '../componentes/Foto';

//Es una variable donde se llama para poder acceder a los diferentes métodos 
const Tab = createBottomTabNavigator();

//Estilos para el botón 
const BtnCaptura = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#E32F45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    //Componenete del navegador 
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            bottom: 10,
            marginHorizontal: 20,
            elevation: 0,
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            height: 60,
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="Bienvenida"
          component={Bienvenida}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/img/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#E32F45' : '#748C94',
                  }}
                />
                <Text style={{color: focused ? '#E32F45' : '#748C94'}}>
                  Inicio
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Foto"
          component={Foto}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/img/Plus.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#FFFFFF',
                }}
              />
            ),
            tabBarButton: props => <BtnCaptura {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//Estolos aplicados a barra de navegación 
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
