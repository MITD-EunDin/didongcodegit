// import React from "react";
// import Bai021customcomponent from "./bai021customcomponent";
// import Bai022Flatlist from "./bai022Flatlist";
// import Sildelesson5 from "./sildelesson5";
// import Validateform from "./Validateform";
// import Signin from "./Bai8ContextAPI/Signin";
// import Explorer from "./Bai8ContextAPI/Explorer";
// import Account from "./Bai8ContextAPI/Account";

// export default function App() {
//   return <Account />;
// }


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, useAuth } from "./Bai8ContextAPI/AuthContext";
import Signin from "./Bai8ContextAPI/Signin";
import BottomNavi from "./Bai8ContextAPI/BottomNavi";

const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="SignIn" component={Signin} />
      ) : (
        <Stack.Screen name="Main" component={BottomNavi} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
