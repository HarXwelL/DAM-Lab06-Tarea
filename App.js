import * as React from 'react';
import {Component} from 'react';
import OurFlatList from './app/components/ourFlatList/OurFlatList';
import ConexionFetch from './app/components/conexionFetch/ConexionFetch';
import login from './app/components/screen/login';
import { 
  Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Video } from 'expo-av';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ConexionFetch />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Video1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <h3>Video</h3>
      <Video
        ref={ref => { this.video = ref }}
        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay={true}
        useNativeControls={true}
        style={{ width: 300, height: 300 }}
      />
      <p>Tambien es una composicion de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, si puede ser descifrado por su destinatario original.</p>
    </View>
  );
}
function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center', margin:50 }}>
      
      <h4><Ionicons name={"body-outline"} size={20} /> 
       Account <Ionicons name={"chevron-forward-outline"} size={20} /></h4>
      <h4><Ionicons name={"notifications-outline"} size={20}/> 
        Notifications<Ionicons name={"chevron-forward-outline"} size={20} /></h4>
      <h4><Ionicons name={"eye-outline"} size={20}/>
        Appearance<Ionicons name={"chevron-forward-outline"} size={20} /></h4>
      <h4><Ionicons name={"shield-half-outline"} size={20}/>
           Privacy & Security<Ionicons name={"chevron-forward-outline"} size={20} /></h4>
      <h4><Ionicons name={"build-outline"} size={20}/>
          Help and Support<Ionicons name={"chevron-forward-outline"} size={20} /></h4>
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <h1>DETALLES</h1>
      <Text>
        Tambien es una composicion de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, si puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Tab = createNativeStackNavigator();
const Stack = createBottomTabNavigator();
function menu() {
  return(<Tab.Navigator>
        <Tab.Screen name="login" component={login} />
        <Tab.Screen name="MOVIES JOSUE" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen}/>
      </Tab.Navigator>
   );
      
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Listado') {
              iconName = focused
                ? 'ios-list'
                : 'ios-list';
            } else if (route.name === 'Video') {
              iconName = focused ? 'caret-forward-circle-outline' : 'caret-forward-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' : 'settings-outline';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Stack.Screen name="Listado" component={menu} options={{ headerShown: false}} />
        <Stack.Screen name="Video" component={Video1} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});