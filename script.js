const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  
  /* ADD YOUR NAME AND PASSWORD FIELD VALIDATIONS BELOW */
  
  if(name.value === "" || name.value == null){
    messages.push("Name is required")
  }
  if(password.value.length <= 8){
    messages.push("Password must be longer than 8 characters")
  }
  
  
  /* ADD YOUR NAME AND PASSWORD FIELD VALIDATIONS ABOVE */

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})