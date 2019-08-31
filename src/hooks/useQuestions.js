import { useState, useEffect } from 'react';
import * as API from "../API";
/**
 * @param {number} n number of questions
 * @returns {API.Question[] | null}
 */
export function useQuestions(n) {
    const [questions, setQuestions] = useState(null);
    useEffect(() => {
        API.getQuestions(n)
            .then(qs => setQuestions(qs))
            .catch(err => alert(err.message));
    }, []);
    return questions;
}
