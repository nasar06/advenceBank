
// get input value.
function getDepositInput(inputElement){
    const newDepositElement = document.getElementById(inputElement);
    const newDepositString = newDepositElement.value;
    const newDepositAmount = parseFloat(newDepositString);

    newDepositElement.value = '';
    return newDepositAmount;
}


// get rest total value;
function getRestTotalValue(restTotal){
    const restTotalElement = document.getElementById(restTotal);
    const restTotalaString = restTotalElement.innerText;
    const restTotalAmount = parseFloat(restTotalaString);


    return restTotalAmount;
}


// set total Amount.
function sumTotal(restTotalFild, totalAmount){
    const totalElement = document.getElementById(restTotalFild);
    totalElement.innerText = totalAmount;
}