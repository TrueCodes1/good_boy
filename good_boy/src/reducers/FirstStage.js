const firstStageReducer = (state = {
    
    typeOfHelp: 'specific_shelter',
    shelter: '',
    amount: ''

}, action) => {

    switch(action.type) {

        case 'UPDATE_FIRST_STAGE':

            return {
                typeOfHelp: action.payload.typeOfHelp,
                shelter: action.payload.shelterChoice,
                amount: action.payload.amount
            }

        default:
            return state
    
    }

}

export default firstStageReducer;