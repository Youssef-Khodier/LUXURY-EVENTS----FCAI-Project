const form = document.getElementById('signup-form') || document.getElementById('login-form')
const firstname_input = document.getElementById('name-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')



form.addEventListener('submit', (e) => {
  
  let errors = []
  
  if(firstname_input){
    
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
  }
  else{
    
    errors = getLoginFormErrors(email_input.value, password_input.value)
  }

  if(errors.length > 0)
    
    e.preventDefault()
    
    error_message.innerText  = errors.join(". ")
  })
  
  function getSignupFormErrors(firstname ,email ,password ,repeatPassword){
    let errors = []
    
    if (firstname === '' || firstname == null){
      errors.push('Fullname is required')
    }
    
    if(email === '' || email == null){
      errors.push('Email is required')
    }
    
    if(password === '' || password == null){
      errors.push('Password is required')
    }
    
    if(password.length < 8){
      errors.push('Password must have at least 8 chracters')
    }
    
    if(password != repeatPassword){
      errors.push('Password does not match')
    }
    
    return errors;  
  }
  
  function getLoginFormErrors(email, password){
    let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 chracters')
  }
  
  return errors;
}


