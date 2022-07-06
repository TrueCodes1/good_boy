const updateGeneralState = (allIsReady) => {
    
    return {
        type: 'UPDATE_GENERAL_STATE',
        payload: { 
            allIsReady
        }
    }

}

const updateGeneralStateHelper = (allIsReady) => {

    return dispatch => {

        dispatch(updateGeneralState(allIsReady))

    }

}

module.exports = { updateGeneralStateHelper }