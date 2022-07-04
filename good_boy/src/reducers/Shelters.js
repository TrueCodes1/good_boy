const sheltersReducer = (state = [], action) => {

    switch (action.type) {

        case 'FETCH_SHELTERS_SUCCESS':
            
            return action.payload.shelters.data.shelters

        default:
            return state;

    }

}

export default sheltersReducer;