import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./../utils";
import { ACTIONS } from ".";

export const getQuestion = id => async dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_QUESTION
  });
  const questions = await _getQuestions();
  dispatch({
    type: ACTIONS.RECEIVE_QUESTION,
    question: Object.values(questions).find(question => question.id === id)
  });
};

export const getQuestions = () => async dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_QUESTIONS
  });
  const questions = await _getQuestions();
  dispatch({
    type: ACTIONS.RECEIVE_QUESTIONS,
    questions
  });
};

export const saveQuestion = question => async dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_SAVE_QUESTION
  });
  const savedQuestion = await _saveQuestion(question);
  dispatch({
    type: ACTIONS.RECEIVE_SAVE_QUESTION,
    question: savedQuestion
  });
};

export const saveQuestionAnswer = answer => dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_SAVE_QUESTION_ANSWER
  });
  _saveQuestionAnswer(answer).then(() => {
    dispatch({
      type: ACTIONS.RECEIVE_SAVE_QUESTION_ANSWER,
      answer
    });
  });
};
