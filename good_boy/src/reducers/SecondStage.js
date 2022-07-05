const secondStageReducer = (state = {
    
    name: '',
    surname: '',
    email: '',
    number: '',
    isReady: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_SECOND_STAGE':

            return {
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email,
                number: action.payload.number,
                isReady: action.payload.isReady
            }

        default:

            return state
    
    }

}

export default secondStageReducer;