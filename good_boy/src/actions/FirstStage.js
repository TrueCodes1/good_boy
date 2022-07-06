const updateFirstStage = (typeOfHelp, shelterChoice, shelterID, amount, isReady) => {
    
    return {
        type: 'UPDATE_FIRST_STAGE',
        payload: { 
            typeOfHelp,
            shelterChoice,
            shelterID,
            amount,
            isReady
        }
    }

}

const updateFirstStageHelper = (typeOfHelp, shelterChoice, shelterID, amount, isReady) => {

    return dispatch => {

        dispatch(updateFirstStage(typeOfHelp, shelterChoice, shelterID, amount, isReady))

    }

}

module.exports = { updateFirstStageHelper }