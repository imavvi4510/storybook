
import React from 'react'
import Home from 'react-native-vector-icons/MaterialCommunityIcons'
import Groups from 'react-native-vector-icons/MaterialIcons'
import LocalGroceryStore from 'react-native-vector-icons/MaterialIcons'
import User from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Faq from '../Screens/Faq'
import { COLORS } from '../constant/Color'
import { Dimensions, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import ActionButton from '../components/ActionButton'

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: COLORS.BLUE,
                    height: Dimensions.get("screen").height * 0.05,
                    opacity: 0.7
                },
                tabBarIcon: ({color}) => {

                    if (route.name === 'Home') {

                        return (
                            <Home name="home" size={30} color={COLORS.WHITE} />
                        );
                    }
                    if (route.name === 'Community') {

                        return (
                            <Groups name="groups" size={30} color={COLORS.WHITE} />
                        );
                    }
                    if (route.name === 'Main') {

                        return (
                            <ActionButton />
                        );
                    }
                    if (route.name === 'Store') {

                        return (
                            <LocalGroceryStore name="local-grocery-store" size={24} color={COLORS.WHITE} />
                        );
                    }

                    if (route.name === 'Profile') {

                        return (
                            <User name="user" size={24} color={color} />
                        );
                    }

                }
            })}
            tabBarOptions={{
                activeTintColor: COLORS.WHITE,
                inactiveTintColor: COLORS.WHITE,

            }}


        >
            <Tab.Screen
                name="Home" //first
                component={Faq}


                options={{
                    header: () => (
                        <CustomHeader />
                    ),
                }}
            />
            <Tab.Screen
                name="Community" //Second
                component={Faq}

                options={{ headerShown: false, title: 'Community' }}
            />
            <Tab.Screen
                name="Main" //third
                component={Faq}

                color={COLORS.WHITE}
                options={{ headerShown: false, title: ' ' }}
            />
            <Tab.Screen
                name="Store" //fourth
                component={Faq}

                options={{ headerShown: false, title: 'Store' }}
            />
            <Tab.Screen
                name="Profile" //fifth
                component={Faq}

                options={{ headerShown: false, title: 'Profile' }}
            />
        </Tab.Navigator>
    );
}



export default TabNavigation


