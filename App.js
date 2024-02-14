import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './screens/Todo';
import Films from './screens/Films';

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
      tabBarAllowFontScaling : true,
      tabBarLabelStyle: {
        fontSize: 22
      },
      tabBarIcon: () =>{
        return 
      }, 
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }
      }
    >
    
      <Tab.Screen  name="Todo" component={Todo} />
      <Tab.Screen  name="Films" component={Films} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
