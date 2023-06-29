import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function LoginScreen({navigation}) {
    const isDarkMode = useColorScheme() === 'dark';
    const textColor = {
        color: isDarkMode ? Colors.lighter : Colors.darker,
    };
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return(
        <View style={[styles.root, backgroundStyle]}>
            <Text style={[styles.text, textColor]}
                onPress={() => {
                    navigation.navigate("signup")
                }}>
            Login Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
    }
});