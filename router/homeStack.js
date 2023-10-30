import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './../screens/mainScreen';
import NestedScreen from './../screens/nestedScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Nested" component={NestedScreen} />
    </Drawer.Navigator>
    //     <Tab.Navigator
    //       options={{
    //         title: 'welcome back !',
    //         headerStyle: {
    //           backgroundColor: 'steelblue',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //       }}
    //     >
    //       <Tab.Screen name="Home" component={MainScreen} />
    //       <Tab.Screen name="Nested" component={NestedScreen} />
    //     </Tab.Navigator>
  );
}
