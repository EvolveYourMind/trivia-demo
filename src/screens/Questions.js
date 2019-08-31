import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useQuestions } from '../hooks/useQuestions';
import { useStack } from '../hooks/useStack';
import * as API from "../API";
import { randomConcat } from '../common/randomConcat';
import { AnswerButton } from '../components/AnswerButton';
import { AnswerPoint } from '../components/AnswerPoint';
import { AllHtmlEntities } from "html-entities"
import { getStatusBarHeight } from 'react-native-status-bar-height';

const NUMBER_OF_QUESTIONS = 10;

export default function ({ navigation }) {
    const questions = useQuestions(NUMBER_OF_QUESTIONS)
    const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
    const [answers, pushAnswers] = useStack();
    const [startTime, setStartTime] = useState(0);
    useEffect(
        () => {
            setStartTime(Date.now()); 
        }, [questions]
    )

    if(questions === null) {
        return <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
            <Text>Loading Questions. Please wait.</Text>
            <ActivityIndicator />
        </View>
    }

    const correctAnswers = questions.map((q, i) => i >= answers.length ? null : q.correct_answer === answers[i]);

    /** @param {string} answer */
    function handleAnswerPressed(answer) {
        pushAnswers(answer);
        if(currQuestionIdx + 1 >= questions.length) {
            correctAnswers[currQuestionIdx] = questions[currQuestionIdx].correct_answer === answer;
            navigation.navigate("Result", { correctAnswers, duration: parseInt((Date.now() - startTime) / 1000)  });
        } else {
            setCurrQuestionIdx(currQuestionIdx + 1);
        }
    }

    return <Question correctAnswers={correctAnswers} question={questions[currQuestionIdx]} onAnswerPress={handleAnswerPressed} />
}

/**
 * 
 * @param {{
 *  question: API.Question,
 *  correctAnswers: boolean[],
 *  onAnswerPress: (answer: string) => void
 * }} props; 
 */
function Question({ question, correctAnswers, onAnswerPress }) {
    const shuffledAnswers = randomConcat(question.incorrect_answers, question.correct_answer);
    const entities = new AllHtmlEntities();
    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#8C7AA9", paddingHorizontal: 10, paddingTop: getStatusBarHeight() + 10 }}>
        <View style={{ padding: 20, borderRadius: 20, backgroundColor: "#EFC4F2" }}>
            <Text style={{ fontSize: 30, fontWeight: "600" }}>{entities.decode(question.question)}</Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 50 }}>
            {correctAnswers.map((v, i) => <AnswerPoint key={i} isCorrect={v} />)}
        </View>

        {shuffledAnswers.map((answer, i) => <AnswerButton key={i} text={entities.decode(answer)} onPress={() => onAnswerPress(answer)} style={{ marginTop: 10 }} />)}
    </View>
} 