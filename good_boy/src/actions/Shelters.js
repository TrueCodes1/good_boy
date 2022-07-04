import axios from 'axios';

const fetchSheltersSuccess = (shelters) => {

    return {
        type: 'FETCH_SHELTERS_SUCCESS',
        payload: { shelters }
    }

}

export const fetchShelters = () => {

    return async dispatch => {

        try {

            let shelters = await axios.get(`https://frontend-assignment-api.goodrequest.dev/api/v1/shelters`);
            dispatch(fetchSheltersSuccess(shelters))

        }
        catch (err) {

            console.log(err.message)
        
        }

    }

}