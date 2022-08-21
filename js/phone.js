function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;

    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumberString);

    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;
    const newPhoneNumber = updatePhoneNumber(true);

    // const phoneTotalPrice = newPhoneNumber * 1219;
    // const phoneTotalElement = document.getElementById('phone-total');
    // phoneTotalElement.innerText = phoneTotalPrice;

    updatePhoneTotalPrice(newPhoneNumber);

    // calculate total
    // const phoneTotalElement = document.getElementById('phone-total')
    // const newPhoneTotalString = phoneTotalElement.innerText;
    // const newPhoneTotal = parseInt(newPhoneTotalString);

    // calculate sub total
    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');

    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;

    calculateSubTotal();



})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumberString);

    // const newPhoneNumber = previousPhoneNumber - 1;
    // phoneNumberField.value = newPhoneNumber;
    const newPhoneNumber = updatePhoneNumber(false);

    // const phoneTotalPrice = newPhoneNumber * 1219;
    // const phoneTotalElement = document.getElementById('phone-total');
    // phoneTotalElement.innerText = phoneTotalPrice;

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})