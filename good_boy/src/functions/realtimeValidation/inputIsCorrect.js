import validator from 'validator';

// FUNCTION USED TO VERIFY EMAIL ADDRESS, RETURNS BOOLEAN
const isEmail = validator.isEmail;


// FUNCTION USED TO VERIFY NAME INPUT VALUE
const nameInput = (value) => {

    if (value.length > 0) {

        if (value.length < 2) {

            return 'too-short'

        } else if (value.length > 20) {

            value = value.substring(0, 20);

            return {

                state: 'max-length',
                value: value
            
            }

        } else {

            return true;

        }

    } else {

        return true

    }

}

// FUNCTION USED TO VERIFY SURNAME INPUT VALUE
const surnameInput = (value) => {

    if (value.length > 0) {

        if (value.length < 2) {

            return 'too-short'

        } else if (value.length > 30) {

            value = value.substring(0, 30);

            return {

                state: 'too-long',
                value: value
            
            }

        } else {

            return true;

        }

    } else {

        return 'empty';

    }

}

// FUNCTION USED TO VERIFY EMAIL INPUT VALUE
const emailInput = (value) => {

    return isEmail(value)

}

// FUNCTION USED TO VERIFY PHONE NUMBER INPUT VALUE
const phoneInput = (value) => {

    if (value.length > 12) {
        
        if (value.substring(0, 4) === '+421' || value.substring(0, 4) === '+420') {    

            return true;

        }

        return false;
        
    }

    return false;

}

// THE GENERAL FUNCTION THAT DECIDES WHICH VERIFICATION FUNCTION TO USE
// BASED ON THE TYPE OF THE INPUT, RETURNING BOOLEAN / OBJECT
export const realtimeValidate = (id, value) => {

    switch (id) {

        case 'input-name':

            return nameInput(value);

        case 'input-surname':

            return surnameInput(value);

        case 'input-email':

            return emailInput(value);

        case 'phone-input':

            return phoneInput(value);

        default:

            break

    }

}
