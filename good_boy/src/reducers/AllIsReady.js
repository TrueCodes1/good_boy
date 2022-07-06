const generalStateReducer = (state = {
    
    allIsReady: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_GENERAL_STATE':

            return {
                allIsReady: action.payload.allIsReady
            }

        default:
            return state
    
    }

}

export default generalStateReducer;