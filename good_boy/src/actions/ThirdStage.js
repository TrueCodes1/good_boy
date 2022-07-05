const updateThirdStage = (agreement) => {
    
    return {
        type: 'UPDATE_THIRD_STAGE',
        payload: { 
            agreement
        }
    }

}

const updateThirdStageHelper = (agreement) => {

    return dispatch => {

        dispatch(updateThirdStage(agreement))

    }

}

module.exports = { updateThirdStageHelper }