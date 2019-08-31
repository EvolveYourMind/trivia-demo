/**
 * Defining API jsdoc types.
 * 
 * @typedef {Object} Question
 * @property {string} category
 * @property {string} type
 * @property {string} difficulty
 * @property {string} question
 * @property {string} correct_answer
 * @property {string[]} incorrect_answers
 * 
 * @typedef {Object} OpentdbResponse
 * @property {number} response_code
 * @property {Question[]} results
 */

const OpentdbResponseCodes = {
    0: "Success: Returned results successfully",
    1: "No Results: Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.",
    2: "Invalid Parameter: Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five",
    3: "Token Not Found: Session Token does not exist",
    4: "Token Empty: Session Token has returned all possible questions for the specified query. Resetting the Token is necessary",
}

/**
 * @param {number} n number of questions 
 * @returns {Promise<Question[]>}
 */
export async function getQuestions(n) {
    const opentdbResponse = await fetchQuestions(n);
    if(opentdbResponse.response_code !== 0) {
        throw new Error(OpentdbResponseCodes[opentdbResponse.response_code]);
    }
    return opentdbResponse.results;
}

/**
 * @param {number} n number of questions 
 * @returns {Promise<OpentdbResponse>}
 */
async function fetchQuestions(n) {
    const response = await fetch(`https://opentdb.com/api.php?amount=${encodeURI(n)}`);
    if(!response.ok) {
        throw new Error("Unable to fetch questions from https://opentdb.com: " + response.statusText);
    }
    return await response.json();
}