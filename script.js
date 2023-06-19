// get the form elements
const name= document.getElementById('name');
const phoneNumber= document.getElementById('phone');
const email= document.getElementById('email');
const password= document.getElementById('password');

// REgEx regular expression for the phonenumber and email
const phoneRegEx= new RegExp(/^[0-9]g/);
const passwordRegEx = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
  );

  console.log('nameeeeeeeeeeeeeeee', name);

  // condition for the name
  name.addEventListener('change', function () {
    if (name.value.length <5) {
        alert('the name must be at least 5 characters');
        name.setAttribute('class','form-control is invalid');
        name.focus();
    }
  } );

// condition for the email
email.addEventListener('change', function () {
    if (!email.value.includes('@')) {
        alert('this field should be a valid email');
        email.setAttribute('class', 'form-control is invalid');
        email.focus();
    }
    
})

// condition for the phoneNumber
phone.addEventListener('change', function(){
    if(phone.value.length<8) {
        alert('the phone number must contain 8 digits');
        phone.setAttribute('class', 'form-control is invalid');
        phone.focus()
    }

    if (phoneRegEx.test(phone.value)) {
        alert('the phone number should contain only numbers');
        phone.setAttribute('class', 'form-control is invalid');
        phone.focus() ;

    }
});

//condition for the password
password.addEventListener('change', function(){
    if (passwordRegEx.test(password.value)) {
        alert('password should contain digits letters and at least 6 characters');
        password.setAttribute('class', 'form-control is invalid');
        password.focus()
        
    }
})