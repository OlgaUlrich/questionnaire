export const addQuestions = payload => {
    return({
        type: "ADD_QUESTIONS",
        array: payload
    })
}

export const addAnswer = (num, item) => {
    return({
        type: "ADD_ANSWER",
        payload: item,
        questId: num
    })
}



