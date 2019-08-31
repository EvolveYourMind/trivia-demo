import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
/**
 *
 * @param {{
 *  text: string,
 *  onPress: () => void
 * }} props
 */
export function AnswerButton({ text, onPress, style }) {
    return <TouchableOpacity onPress={onPress} style={[{
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        backgroundColor: "#FF6B6B",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }, style]}>
        <Text style={{ color: "#fff", fontSize: 18 }}>{text}</Text>
    </TouchableOpacity >;
}
