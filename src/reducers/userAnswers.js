const AnswerReducer = (state = {1: null,
2: null, 3:null, 4: null, 5: null, 6: null, 7: null, 8: null, 9:null, 10: null}, action) => {
  switch(action.type){
     case "ADD_ANSWER":
         let copyState = {...state}
         copyState[`${action.questId}`] = action.payload
         return copyState

    default:
        return state

  }

}

export default AnswerReducer