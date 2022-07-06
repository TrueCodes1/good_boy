const updateSecondStage = (name, nameInputIsCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, number, numberInputIsCorrect, isReady) => {
    
    return {
        type: 'UPDATE_SECOND_STAGE',
        payload: { 
            name, 
            nameInputIsCorrect,
            surname,
            surnameInputIsCorrect,
            email,
            emailInputIsCorrect,
            number,
            numberInputIsCorrect,
            isReady
        }
    }

}

const updateSeconsStageHelper = (name, nameInputIsCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, number, numberInputIsCorrect, isReady) => {

    return dispatch => {

        dispatch(updateSecondStage(name, nameInputIsCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, number, numberInputIsCorrect, isReady))

    }

}

module.exports = { updateSeconsStageHelper }