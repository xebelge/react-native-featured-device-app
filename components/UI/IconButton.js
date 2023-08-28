import { Pressable, StyleSheets } from "react-native";
import { IonIcons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPress }) {
    return <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <IonIcons name={icon} size={size} color={color} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    pressed: {
        opacity: 0.7
    }
})