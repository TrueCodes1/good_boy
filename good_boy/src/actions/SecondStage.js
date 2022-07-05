const updateSecondStage = (name, surname, email, number, isReady) => {
    
    return {
        type: 'UPDATE_SECOND_STAGE',
        payload: { 
            name, 
            surname,
            email,
            number,
            isReady
        }
    }

}

const updateSeconsStageHelper = (name, surname, email, number, isReady) => {

    return dispatch => {

        dispatch(updateSecondStage(name, surname, email, number, isReady))

    }

}

module.exports = { updateSeconsStageHelper }