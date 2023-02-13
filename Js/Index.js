document.getElementById('login_btn').addEventListener('click',function(){
    const bankEmail = document.getElementById('bank_email');
    const emailText = bankEmail.value;
    
    const bankPass = document.getElementById('bank_password');
    const passText = bankPass.value;

    if(emailText === 'email'){
        window.location.href = 'bank.html';

    }
    else{
       alert('Password And email wrong');
       
    }
})