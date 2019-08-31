import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContext, NavigationActions, StackActions } from "react-navigation";

export default function ({ navigation }) {
    const navigationContext = useContext(NavigationContext);
    const correctAnswers = navigation.getParam("correctAnswers");
    const duration = navigation.getParam("duration");

    function playAgain() {
        navigationContext.dispatch(StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'Questions' })
            ]
        }));
    }

    return <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center", }}>
        <View style={{ alignItems: "center", }}>
            <Text style={{ fontSize: 15, marginBottom: 15 }}>You completed the Quiz in {duration} seconds</Text>
            <Text style={{ fontSize: 15, marginBottom: 15 }}>Your score</Text>
            <Text style={{ fontSize: 30, fontWeight: "600" }}>{correctAnswers.reduce((a, v) => v === true ? (a + 1) : a, 0)}/{correctAnswers.length}</Text>
        </View>
        <Button onPress={playAgain} title={"Play again"} />
    </View>
}