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

module.exports = { moveForth, moveBackward }