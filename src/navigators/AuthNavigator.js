import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {MainNavigator} from './MainNavigator';

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen
        name="main"
        component={MainNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
