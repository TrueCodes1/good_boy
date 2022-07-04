const updateFirstStage = (typeOfHelp, shelterChoice, amount) => {
    
    return {
        type: 'UPDATE_FIRST_STAGE',
        payload: { 
            typeOfHelp,
            shelterChoice,
            amount
        }
    }

}

const updateFirstStageHelper = (typeOfHelp, shelterChoice, amount) => {

    return dispatch => {

        dispatch(updateFirstStage(typeOfHelp, shelterChoice, amount))

    }

}

module.exports = { updateFirstStageHelper }