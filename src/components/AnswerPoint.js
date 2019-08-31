import React from 'react';
import { View } from 'react-native';
/**
 *
 * @param {{isCorrect: boolean | null}} param
 */
export function AnswerPoint({ isCorrect }) {
    const radius = 12;
    let color;
    if(isCorrect === null) {
        color === "white";
    } else if(isCorrect === true) {
        color = "#B6FFAA";
    }
    else {
        color = "#DB3636";
    }
    return <View style={{ backgroundColor: color, width: radius * 2, height: radius * 2, borderRadius: radius, marginRight: 10, borderColor: "black", borderWidth: 1 }} />;
}
