
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "native-base";


const CustomBackButton = () => (
    <View style={styles.backButtonContainer}>
        <Ionicons name="arrow-back" size={18} color="#000" />
    </View>
);

export default CustomBackButton
const styles = StyleSheet.create({
    backButtonContainer: {
        backgroundColor: "#e1e1e1",
        borderRadius: 100,
        padding: 8,
    },
});
