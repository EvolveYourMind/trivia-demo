import React from 'react';
import { View, Button } from 'react-native';

export default function ({ navigation }) {

    function handleStartQuizPressed() {
        navigation.navigate("Questions");
    }

    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={handleStartQuizPressed} title={"Start Quiz"} />
    </View>
}