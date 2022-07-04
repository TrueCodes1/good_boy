const progressReducer = (state = 1, action) => {

    switch(action.type) {

        case 'MOVEON':

            if (state <= 2) {

                return state+1;

            } else {

                return state;

            }

        case 'MOVEBACK':

            if (state >= 2) {

                return state-1;

            } else {

                return state;

            }

        default:
            return state
    
    }

}

export default progressReducer;