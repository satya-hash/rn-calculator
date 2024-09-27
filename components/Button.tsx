import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/constants/Colors";

function Button({
    text,
    type,
    size,
    onPress,
    theme,
}: {
    text: string;
    type: string;
    size?: string;
    onPress: () => void;
    theme: any;
}): JSX.Element {
    let buttonStyles = [styles.button];
    let textStyles: (typeof styles.text | { color: string })[] = [styles.text];

    if (type === "primary") {
        buttonStyles.push(styles.themePrimary);
        buttonStyles.push({ backgroundColor: theme.background });
        textStyles.push({ color: theme.text });
    } else if (type === "secondary") {
        buttonStyles.push(styles.themeSecondary);
        buttonStyles.push({ backgroundColor: theme.secondaryBackground });
        textStyles.push({ color: theme.text });
    } else if (type === "accent") {
        buttonStyles.push(styles.themeAccent);
        buttonStyles.push({ backgroundColor: theme.accent });
        textStyles.push({ color: Colors.text[100] });
    }

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    }

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={[textStyles]}>
                {text === "<" ? (
                    <FontAwesomeIcon icon={faDeleteLeft} color={theme.text} size={28} />
                ) : (
                    text
                )}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
    },
    buttonDouble: {
        width: 180,
        height: 80,
    },
    text: {
        fontSize: 24,
        fontWeight: "semibold",
    },
});

export default Button;
