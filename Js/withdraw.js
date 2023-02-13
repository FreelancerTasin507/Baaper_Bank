/*
1/add event listener with the withdraw button
2/ get the withdraw amount from the withdraw input fild
2.5/ make sure to conver the input number by using parseFloat
3/get previous withdraw 
4/calculate total withdraw amount
4.5/set total withdraw amount
5/ get the previous total
6/calculate new balance total
6.5/set the new balanace total
*/ 
// step 1
document.getElementById('btn_withdraw').addEventListener('click',function(){
    // step 2 
    const withdraw_amount = document.getElementById('withdraw_amount');
    const new_withdrew_amount_string  = withdraw_amount.value;
    const new_withdrew_amount = parseFloat(new_withdrew_amount_string);

    // step 3
    const withdraw_previous = document.getElementById('withdraw_total');
    const previous_withdraw_amount_string = withdraw_previous.innerText;
    const previous_deposit_amount = parseFloat(previous_withdraw_amount_string);

    // step 4
    const current_withdraw_amount = previous_deposit_amount + new_withdrew_amount;
    withdraw_previous.innerText = current_withdraw_amount;

    // step 5
    const balance_total = document.getElementById('balance_total');
    const previous_balance_total_string = balance_total.innerText;
    const previous_balance_total = parseFloat(previous_balance_total_string);

    const current_balance_amount = previous_balance_total - new_withdrew_amount;
    balance_total.innerText = current_balance_amount;
    


    // step 7
    withdraw_amount.value = '';

     
})