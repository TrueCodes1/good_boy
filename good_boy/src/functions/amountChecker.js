// FUNCTION THAT CHECKS THE AMOUNT OF MONEY INPUT IN REAL TIME 
// AND FILTERS OUT ALL THE UNWANTED CHARACTERS (2 DECIMAL POINTS; COMAS; MORE ZEROS AT THE BEGINNING; ETC.)
export const checker = (amount) => {

    let numbers = '0123456789.,';
    let validated = '';

    // FILTERING OUT ALL THE CHARACTERS THAT ARE NOT NUMBERS, ',' OR '.'
    for (let i = 0; i < amount.length; i++) {

        numbers.includes(amount[i]) ? validated+=amount[i] : console.log()

    }
    
    // REPLACING ALL THE ',' WITH '.' ONLY
    validated = validated.replaceAll(',', '.');

    // PREVENTING THE VALUE FROM HAVING 2 ZEROS AT THE BEGINNING 
    while (validated.length > 1 && validated[0] === '0' && validated[1] !== '.') {

        console.log(validated.length)
        validated = validated.slice(0, 1);

    }

    // IN CASE THE FIRST CHCARACTER IS '.', THE ZERO IS ADDED TO TO THE BEGINNING
    // SO THAT IT IS '0.'
    if (validated[0] === '.') {

        validated = validated.split('').reverse();
        validated.push('0');
        validated = validated.reverse().join('');

    }

    // IN CASE THERE ARE MORE '.' IN THE VALUE, THE LAST ONE IS REMOVED
    // UNTIL ONLY ONE IS LEFT
    while (validated.split('.').length > 2) {

        validated = validated.split('').reverse().join('');
        validated = validated.replace('.', '');
        validated = validated.split('').reverse().join('');

    }

    // THE BOOLEAN TELLING WHETHER THE VALUE HAS SOME REAL VALUE IS SET FALSE
    // AND IS SET TRUE ONLY IN CASE THE VALUE IS OF SOME REAL VALUE
    let isOfSomeValue = false;

    if (validated.includes('.')) {

        if (validated.split('.')[0] === '0') {
        
            if (Number(validated.split('.')[1]) !== 0) {
        
                isOfSomeValue = true;
        
            }
        
        } else {
        
            isOfSomeValue = true;
        
        }
    
    } else {
    
        if (validated!=='0'){
    
            isOfSomeValue = true;
    
        }
    
    }

    // THE OBJECT ON RETURN PASSES 2 PIECES OF INFORMATION,
    // THE ACTUAL VALUE VALIDATED BY THE FUNCTION AND 
    // THE INFO ABOUT WHETHER THE VALU HAS SOME REAL VALUE
    return {
    
        validated,
        isOfSomeValue
    
    };

}