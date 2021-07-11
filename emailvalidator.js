function validateemail() {
  const form = document.getElementById('form'),
    email = document.getElementById('input'),
    error_m = document.getElementById('error-m'),
    error_d = document.getElementById('error-d'),
    pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (email.value.match(pattern)) {
    console.log(`${email.value} successfully added to subscribers list!🎉🎉`)
    email.value = ''
  } else {
    email.classList.add('errorInput')
    if (window.offsetWidth > 768) {
      error_d.classList.add('d-active')
      // email.classList.add('animate__headShake')
      email.value = ''
    } else {
      error_m.classList.add('d-active')
      email.classList.add('animate__headShake')
      email.value = ''
    }
  }
}
function valdateOnkeydown() {
  email.classList.remove('d-active')
  alert("ss")
}

animate__headShake
