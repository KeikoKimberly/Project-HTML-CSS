console.log('halokeiko')

function validateForm() {
    let result = false

    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById('emailTxt').value
    let password = document.getElementById('passTxt').value
    let error = document.getElementById('error_message')

    if(filter.test(email)===false) {
        error.innerHTML = 'Invalid email'
        return result
    }
    if(password.length == 0) {
        error.innerHTML = 'Invalid password'
        return result
    }

    //validation correct
    error.innerHTML = ''
    result = true
    return result
}