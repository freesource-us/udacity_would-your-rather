import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./../utils";

export const REQUEST_QUESTION = "REQUEST_QUESTION";
export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const REQUEST_SAVE_QUESTION = "REQUEST_SAVE_QUESTION";
export const REQUEST_SAVE_QUESTION_ANSWER = "REQUEST_SAVE_QUESTION_ANSWER";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_SAVE_QUESTION = "RECEIVE_SAVE_QUESTION";
export const RECEIVE_SAVE_QUESTION_ANSWER = "RECEIVE_SAVE_QUESTION_ANSWER";

export const getQuestion = id => async dispatch => {
  dispatch({
    type: REQUEST_QUESTION
  });
  const questions = await _getQuestions();
  dispatch({
    type: RECEIVE_QUESTION,
    question: Object.values(questions).find(question => question.id === id)
  });
};

export const getQuestions = () => async dispatch => {
  dispatch({
    type: REQUEST_QUESTIONS
  });
  const questions = await _getQuestions();
  dispatch({
    type: RECEIVE_QUESTIONS,
    questions
  });
};

export const saveQuestion = question => async dispatch => {
  dispatch({
    type: REQUEST_SAVE_QUESTION
  });
  const savedQuestion = await _saveQuestion(question);
  dispatch({
    type: RECEIVE_SAVE_QUESTION,
    question: savedQuestion
  });
};

export const saveQuestionAnswer = answer => dispatch => {
  dispatch({
    type: REQUEST_SAVE_QUESTION_ANSWER
  });
  _saveQuestionAnswer(answer).then(() => {
    dispatch({
      type: RECEIVE_SAVE_QUESTION_ANSWER,
      answer
    });
  });
};
