const moveForth = () => {
    
    return {
        type: 'MOVEON'
    }

}

const moveBackward = () => {

    return {
        type: 'MOVEBACK'
    }

} 

const progress = (toSet) => {

    return {
        type: 'SET_PROGRESS',
        payload: { toSet }
    }

}

const setProgress = (toSet) => {

    return dispatch => {

        dispatch(progress(toSet))

    }

}

module.exports = { moveForth, moveBackward, setProgress }