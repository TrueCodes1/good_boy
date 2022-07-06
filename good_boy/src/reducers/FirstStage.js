const firstStageReducer = (state = {
    
    typeOfHelp: 'specific_shelter',
    shelter: '',
    shelterID: '',
    amount: '',
    isReady: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_FIRST_STAGE':

            return {
                typeOfHelp: action.payload.typeOfHelp,
                shelter: action.payload.shelterChoice,
                shelterID: action.payload.shelterID,
                amount: action.payload.amount,
                isReady: action.payload.isReady
            }

        default:
            return state
    
    }

}

export default firstStageReducer;