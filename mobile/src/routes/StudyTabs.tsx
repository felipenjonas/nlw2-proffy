import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

// Aqui não será usado o NavigationContainer, pois ele estará por volta de toda a navegação existente na aplicação.

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    // Android
                    elevation: 0,
                    // IOS
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                // Aba desativada
                inactiveBackgroundColor: '#fafafc',
                // Aba Ativada
                activeBackgroundColor: '#ebebf5',
                // Cor do texto na Aba desativda
                inactiveTintColor: '#c1bccc',
                // Cor do texto na ABA Ativada
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5': color} />
                        )
                    }
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5': color} />
                        )
                    }
                }}

            />
        </Navigator>
    )

}

export default StudyTabs;
