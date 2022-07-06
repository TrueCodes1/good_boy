const updateThirdStage = (agreement, isReady) => {
    
    return {
        type: 'UPDATE_THIRD_STAGE',
        payload: { 
            agreement,
            isReady
        }
    }

}

const updateThirdStageHelper = (agreement, isReady) => {

    return dispatch => {

        dispatch(updateThirdStage(agreement, isReady))

    }

}

module.exports = { updateThirdStageHelper }