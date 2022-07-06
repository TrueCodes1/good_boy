const secondStageReducer = (state = {
    
    name: '-',
    nameInputIsCorrect: true,
    surname: '',
    surnameInputIsCorrect: false,
    email: '',
    emailInputIsCorrect: false,
    number: '',
    numberInputIsCorrect: false,
    isReady: false

}, action) => {

    switch(action.type) {

        case 'UPDATE_SECOND_STAGE':

            return {
                name: action.payload.name,
                nameInputIsCorrect: action.payload.nameInputIsCorrect,
                surname: action.payload.surname,
                surnameInputIsCorrect: action.payload.surnameInputIsCorrect,
                email: action.payload.email,
                emailInputIsCorrect: action.payload.emailInputIsCorrect,
                number: action.payload.number,
                numberInputIsCorrect: action.payload.numberInputIsCorrect,
                isReady: action.payload.isReady
            }

        default:

            return state
    
    }

}

export default secondStageReducer;