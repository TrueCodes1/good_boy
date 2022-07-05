const thirdStageReducer = (state = {
    
    agreement: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_THIRD_STAGE':

            return {
                agreement: action.payload.agreement
            }

        default:

            return state
    
    }

}

export default thirdStageReducer;