import { GET_QUESTION, GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        question: action.question
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        question: action.question
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        answer: action.answer
      };
    default:
      return state;
  }
};
