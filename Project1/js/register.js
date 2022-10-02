console.log('halo')

function validateForm() {
    let result = false

    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let name = document.getElementById('nameTxt').value
    let email = document.getElementById('emailTxt').value
    let genderFemale = document.getElementById('female')
    let genderMale = document.getElementById('male')
    let city = document.getElementById('pilihkota').value
    let password = document.getElementById('password').value
    let confirmPass = document.getElementById('confirmPassword').value
    let error = document.getElementById('error_message')


    if(name.length == 0) {
        error.innerHTML = 'Name must be filled out'
        return result
    }
    if(filter.test(email)===false){
        error.innerHTML = 'Invalid email'
        return result
    }
    if(!genderFemale.checked && !genderMale.checked) {
        error.innerHTML = 'You must choose gender'
        return result
    }
    if(city == 'Select city') {
        error.innerHTML = 'You must choose city'
        return result
    }
    var containsUpper = /[A-Z]/.test(password)
    var containsDigits = /[0-9]/.test(password)
    if(password.length<8 || containsDigits=="" || containsUpper==""){
        error.innerHTML = 'Invalid password, Password must containt minimum 8 characters and at least one Capital and one number'
        return result
    }
    if(password!=confirmPass) {
        error.innerHTML = 'Password does not match'
        return result
    }
    
    //validation correct
    error.innerHTML = ''
    result = true
    return result
}

