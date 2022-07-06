import $ from 'jquery';

// DECLARING ALL THE NECCESSARY VARIABLES FROM THE SPECIFIC STAGES
const header = $(`#header`);
let currentView = 'first';

// FUNCTIONS *************************************************************************************
//   *********************************************************************************************
// FIRST STAGE
// FUNCTION TO MOVE ON FROM THE FIRST STAGE
const moveOnFromFirst = (firstViewComponents, secondViewComponents, firstStage, secondStage) => {

    // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW
        
    let timeout = 0;
        
    // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
    // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
    // APPENDED TO IT. 
    firstViewComponents.forEach(component => {

        setTimeout(() => {

            $(component).removeClass('show');
            $(component).addClass('hide');

        }, timeout)

    // FOR EACH OF THE COMPONENTS, THE TIME WHEN
    // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
    timeout += 100;

    });

    // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
    // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
    // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
    setTimeout(() => {

        $(firstStage).addClass('hidden');

        firstViewComponents.forEach(component => {

            $(component).removeClass('hide');
            $(component).addClass('invisible');

        })

    }, timeout + 250)

    setTimeout(() => {

        // THE TIMEOUT VARIABLE IS RESET TO 0
        timeout = 0;

        // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
        $(header).html(`${Headers.second}`)
        
        $(secondStage).removeClass('hidden');

        secondViewComponents.forEach(component => {

            setTimeout(() => {

                $(component).addClass('show');

            }, timeout)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout += 100;

        })

    }, timeout + 200)

    currentView = 'second';

}
// MOVING BACK FROM THE FIRST STAGE ONLY ALERTS CAUTION DIRECTLY FROM THE REACT COPONENT


// SECOND STAGE 
// FUNCTION TO MOVE ON FROM THE SECOND STAGE
const moveOnFromSecond = (secondViewComponents, thirdViewComponents, secondStage, thirdStage) => {

    // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

    let timeout2 = 0;

    // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
    // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
    // APPENDED TO IT. 
    secondViewComponents.forEach(component => {

    setTimeout(() => {

        $(component).removeClass('show');
        $(component).addClass('hide');

    }, timeout2)

    // FOR EACH OF THE COMPONENTS, THE TIME WHEN
    // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
    timeout2 += 100;

    });

    // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
    // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
    // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
    setTimeout(() => {

        $(secondStage).addClass('hidden');

        secondViewComponents.forEach(component => {

            $(component).removeClass('hide');
            $(component).addClass('invisible');

        })

    }, timeout2 + 250)

    setTimeout(() => {

        // THE TIMEOUT VARIABLE IS RESET TO 0
        timeout2 = 0;

        // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
        $(header).html(`${Headers.third}`)
        
        $(thirdStage).removeClass('hidden');

        thirdViewComponents.forEach(component => {

            setTimeout(() => {

            $(component).addClass('show');

            }, timeout2)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout2 += 100;

        })

    }, timeout2 + 200)

    currentView = 'third';

}
// FUNCTION TO MOVE BACK FROM THE SECOND STAGE
const moveBackFromSecond = (secondViewComponents, firstViewComponents, secondStage, firstStage) => {

    // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

    let timeout = 0;

    // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
    // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
    // APPENDED TO IT. 
    secondViewComponents.forEach(component => {

        setTimeout(() => {

            $(component).removeClass('show');
            $(component).addClass('hide');

        }, timeout)

        // FOR EACH OF THE COMPONENTS, THE TIME WHEN
        // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
        timeout += 100;

    });

    // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
    // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
    // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
    setTimeout(() => {

        secondViewComponents.forEach(component => {

            $(component).removeClass('hide');

        })

        $(secondStage).addClass('hidden');

    }, timeout + 250)

    setTimeout(() => {

        // THE TIMEOUT VARIABLE IS RESET TO 0
        timeout = 0;

        // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
        $(header).html(`${Headers.first}`)
        
        $(firstStage).removeClass('hidden');

        firstViewComponents.forEach(component => {

            setTimeout(() => {

                $(component).addClass('show');

            }, timeout)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout += 100;

        })

    }, timeout + 200)

    currentView = 'first';

}


// THIRD STAGE
// MOVING BACK FROM THE FIRST ONLY ALERTS CAUTION DIRECTLY FROM THE REACT COMPONENT
const moveBackFromThird = (thirdViewComponents, secondViewComponents, thirdStage, secondStage) => {

    // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW
    
    let timeout2 = 0;
    
    // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
    // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
    // APPENDED TO IT. 
    thirdViewComponents.forEach(component => {

        setTimeout(() => {

            $(component).removeClass('show');
            $(component).addClass('hide');

        }, timeout2)

        // FOR EACH OF THE COMPONENTS, THE TIME WHEN
        // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
        timeout2 += 100;

    });

    // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
    // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
    // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
    setTimeout(() => {

        thirdViewComponents.forEach(component => {

        $(component).removeClass('hide');

        })

        $(thirdStage).addClass('hidden');

    }, timeout2 + 250)

    setTimeout(() => {

        // THE TIMEOUT VARIABLE IS RESET TO 0
        timeout2 = 0;

        // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
        $(header).html(`${Headers.second}`)
        
        $(secondStage).removeClass('hidden');

        secondViewComponents.forEach(component => {

        setTimeout(() => {

            $(component).addClass('show');

        }, timeout2)

        // FOR EACH OF THE COMPONENTS, THE TIME WHEN
        // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
        timeout2 += 100;

        })

    }, timeout2 + 200)

    currentView = 'second';

}

// GENERAL FUNCTION THAT DECIDES WHICH OF THE 'MOVE' FUNCTION TO USE NEXT 
// BASED ON THE DIRECTION AND THE STAGE OF ORIGIN 
export const move = (direction, fromWhere, currentStageComponents, destinationStageComponents, currentStage, destinationStage ) => {

    switch (direction) {
        
        case 'forth':

            switch (fromWhere) {

                case 'first':

                    moveOnFromFirst(currentStageComponents, destinationStageComponents, currentStage, destinationStage);
                    break

                case 'second':

                    moveOnFromSecond(currentStageComponents, destinationStageComponents, currentStage, destinationStage);
                    break

                case 'third':

                    // THIS WILL NEVER HAPPEN, AS THIS CASE ONLY ALERTS CAUTION FOR THE USER
                    // DIRECTLY FROM THE REACT COMPONENT

                    break

                default:

                    break

            }

            break

        case 'back':

            switch (fromWhere) {

                case 'first':

                    // THIS WILL NEVER HAPPEN, AS THIS CASE ONLY ALERTS CAUTION FOR THE USER
                    // DIRECTLY FROM THE REACT COMPONENT

                    break

                case 'second':

                    moveBackFromSecond(currentStageComponents, destinationStageComponents, currentStage, destinationStage);
                    break

                case 'third':

                    moveBackFromThird(currentStageComponents, destinationStageComponents, currentStage, destinationStage);
                    break

                default:

                    break

            }
            
            break

        default:
            
            break

    }

} 