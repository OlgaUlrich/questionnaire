import { combineReducers } from "redux";
import QuestionReducer from "./questionReducer";
import AnswerReducer from "./userAnswers";

let Reducers = combineReducers({
    questions : QuestionReducer,
    answers: AnswerReducer
})

export default Reducers