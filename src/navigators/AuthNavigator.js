import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { SignupScreen } from "../screens/SignupScreen";

export function AuthNavigator() {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{title: 'Welcome'}} />
                <Stack.Screen
                    name="signup"
                    component={SignupScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}