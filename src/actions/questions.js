import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./../utils";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const GET_QUESTION = "GET_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const getQuestion = id => async dispatch => {
  const questions = await _getQuestions();

  dispatch({
    type: GET_QUESTION,
    question: Object.values(questions).find(question => question.id === id)
  });
};

export const getQuestions = () => async dispatch => {
  const questions = await _getQuestions();

  dispatch({
    type: GET_QUESTIONS,
    questions
  });
};

export const saveQuestion = question => async dispatch => {
  const savedQuestion = await _saveQuestion(question);

  dispatch({
    type: SAVE_QUESTION,
    question: savedQuestion
  });
};

export const saveQuestionAnswer = answer => dispatch => {
  _saveQuestionAnswer(answer).then(() => {
    dispatch({
      type: SAVE_QUESTION_ANSWER,
      answer
    });
  });
};
