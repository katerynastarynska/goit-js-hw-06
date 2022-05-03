const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
   event.preventDefault();
   const formElements = event.currentTarget.elements;
   const email =  formElements.email.value;
   const password = formElements.password.value;

   if(email === "" || password === "") {
    const message = "please provide valid information";
    alert(message);
    } else {
    const formData = {
        email,
        password,
      }
    console.log(formData);
    }
    event.currentTarget.reset();
}
