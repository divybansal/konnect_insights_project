function submitForm() {

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var company = document.getElementById('company').value;


  if (fullName === '') {
      alert('Please enter your full name.');
      return;
  }

  if (email === '') {
      alert('Please enter your email address.');
      return;
  }


  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  if (mobile === '') {
      alert('Please enter your mobile number.');
      return;
  }


  if (!isValidMobile(mobile)) {
      alert('Please enter a valid mobile number.');
      return;
  }

  if (company === '') {
      alert('Please enter your company name.');
      return;
  }


  var specialMessage = "Thank you for submitting the form!";
  alert('Full Name: ' + fullName + '\nEmail: ' + email + '\nMobile: ' + mobile + '\nCompany: ' + company + '\n\n' + specialMessage);
}


function isValidEmail(email) {

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function isValidMobile(mobile) {

  var mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}
