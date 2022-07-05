export const checker = (amount) => {

    let numbers = '0123456789.,';
    let validated = '';

    for (let i = 0; i < amount.length; i++) {

        numbers.includes(amount[i]) ? validated+=amount[i] : console.clear()

    }
    
    validated = validated.replaceAll(',', '.');

    while (validated.length > 1 && validated[0] === '0' && validated[1] !== '.') {

        console.log(validated.length)
        validated = validated.slice(0, 1);

    }

    if (validated[0] === '.') {

        validated = validated.split('').reverse();
        validated.push('0');
        validated = validated.reverse().join('');

    }

    while (validated.split('.').length > 2) {

        validated = validated.split('').reverse().join('');
        validated = validated.replace('.', '');
        validated = validated.split('').reverse().join('');
        console.log(validated)

    }

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

    return {
        validated,
        isOfSomeValue
    };

}