document.getElementById("btn_deposit").addEventListener("click", function () {
  const deposit_amount = document.getElementById("deposit_amount");
  const new_Deposit_Amount_string = deposit_amount.value;
  const new_Deposit_Amount = parseFloat(new_Deposit_Amount_string);

  const deposit_Previous = document.getElementById("Deposit_total");
  const previous_deposit_amount_string = deposit_Previous.innerText;
  const previous_deposit_amount = parseFloat(previous_deposit_amount_string);

  const current_deposit_amount = previous_deposit_amount + new_Deposit_Amount;

  deposit_Previous.innerText = current_deposit_amount;

  const balance_total = document.getElementById('balance_total');
  const previous_balance_total_string = balance_total.innerText ;
  const previous_balance_total = parseFloat(previous_balance_total_string);
  const current_balance_amount = previous_balance_total + new_Deposit_Amount;
  balance_total.innerText = current_balance_amount ;
  
  deposit_amount.value = "";
});
