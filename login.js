//get email input text
document.getElementById('logBtn').addEventListener('click', function () {
    const email = document.getElementById('getInputTxt');
    const pass = document.getElementById('getInputPss');
    if (email.value === 'nasar5847@gmail.com' && pass.value === 'nasar1928') {
        window.location.href = 'home.html'
    }
    else {
        alert('please valid Email or Password')
    }
})