// click deposit btn and get deposit input amount.

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    // deposit get new amount
    const newDepositAmount = getDepositInput('deposit-field');


    // get rest total deposit amount
    const restDepositAmount = getRestTotalValue('deposit-total');

    // sum total deposit amount.
    const totalDepositAmount = restDepositAmount + newDepositAmount;
    

    // set deposit total amount.
    sumTotal('deposit-total', totalDepositAmount);


    //get rest total amount.
    const restTotalAmount = getRestTotalValue('balance-total');

    // sum new deposit total and rest total amount.
    const totalAmount = restTotalAmount + newDepositAmount;

    // set total amount.
    sumTotal('balance-total', totalAmount);
})