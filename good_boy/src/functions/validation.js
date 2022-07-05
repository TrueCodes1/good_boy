import $ from 'jquery';

// FIRST STAGE IS PASSED AS AN ARGUMENT IN THE validateAllInputs() FUNCTION

// SECOND STAGE
const name = $(`#input-name`).val();
const surname = $(`#input-surname`).val();
const email = $(`#input-email`).val();
const phoneNumber = $(`#phone-input`).attr('value');

const secondStage = {name, surname, email, phoneNumber};

// THIRD STAGE IS PASSED AS AN ARGUMENT IN THE validateAllInputs() FUNCTION

// FUNCTION TO VALIDATE FIRST STAGE VALUES
const validateFirstStage = (data) => {

// FINISH THE FIRST STAGE VALIDATION

}

// FUNCTION TO VALIDATE SECOND STAGE VALUES
const validateSecondStage = (data) => {

// FINISH THE SECOND STAGE VALIDATION
    
}

// FUNCTION TO VALIDATE THIRD STAGE VALUES
const validateThirdStage = (data) => {

// FINISH THE THIRD STAGE VALIDATION
    
}

// FUNCTION THAT VALIDATES ALL THE STAGES WITH ITS VALUES AND
// RETURNS AN OBJECT WITH INFORMATION ABOUT CORRECTNESS OF EACH
// OF THE STAGES
export const validateAllInputs = (firstStage, thirdStage) => {

    let firstStageIsCorrect = validateFirstStage(firstStage); 
    let secondStageIsCorrect = validateSecondStage(secondStage); 
    let thirdStageIsCorrect = validateThirdStage(thirdStage); 

    return {

        firstStageIsCorrect,
        secondStageIsCorrect, 
        thirdStageIsCorrect
    
    }

}
