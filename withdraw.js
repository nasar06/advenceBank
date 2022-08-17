// click withdraw and get withdraw input amount.
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    // get withdraw amount.
    const newWithdrawAmount = getDepositInput('withdraw-field');
    

    // get rest withdraw amount.
    const restWithdrawAmount = getRestTotalValue('withdraw-total');

    //sum withdraw total.
    const totalWithdrawAmount = restWithdrawAmount + newWithdrawAmount;


    //set total withdraw amount.
    sumTotal('withdraw-total', totalWithdrawAmount);

    //get rest total amount
    const restTotalAmount = getRestTotalValue('balance-total');

    // sum total amount.
    const totalAmount = restTotalAmount - newWithdrawAmount;

    //set total amount.
    sumTotal('balance-total', totalAmount);
})