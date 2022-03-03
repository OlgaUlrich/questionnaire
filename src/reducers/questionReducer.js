// let initialState = []

const QuestionReducer = (state = [], action) => {
  switch(action.type){
     case "ADD_QUESTIONS":
         let copyState = [...state]
         let questions = copyState.concat(action.array)
         return questions

    default:
        return state

  }

}

export default QuestionReducer