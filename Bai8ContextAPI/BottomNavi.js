import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Explorer from "./Explorer";
import Account from "./Account";

const Tab = createBottomTabNavigator();

export default function BottomNavi() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Explorer" ? "home-outline" : "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5A6CF3",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Explorer" component={Explorer} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
