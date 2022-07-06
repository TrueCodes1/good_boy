const thirdStageReducer = (state = {
    
    agreement: false,
    isReady: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_THIRD_STAGE':

            return {
            
                agreement: action.payload.agreement,
                isReady: action.payload.isReady

            }

        default:

            return state
    
    }

}

export default thirdStageReducer;