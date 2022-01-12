
const validEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(phone).toLowerCase());
  };
  
  const form = document.querySelector("form");
  const thankYou = document.querySelector(".thank-you");
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const phoneInput = document.querySelector('input[name="phone"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  
  const inputs = [nameInput, emailInput, phoneInput, messageInput];
  
  let validForm = false;
  let validation = false;
  
  const resetElement = (element) => {
    element.classList.remove("invalid");
    element.nextElementSibling.classList.add("hidden");
  };
  
  const invalidateElement = (element) => {
    element.classList.add("invalid");
    element.nextElementSibling.classList.remove("hidden");
  };
  
  const validateInputs = () => {
    if(!validation) return;
  
    validForm = true;
    inputs.forEach(resetElement);
  
      if (!nameInput.value) {
      validForm = false;
      invalidateElement(nameInput);
    }
      if (!validEmail(emailInput.value)){
          validForm = false;
          invalidateElement(emailInput);
      }
  
      if (!validPhone(phoneInput.value)){
          validForm = false;
          invalidateElement(phoneInput);
      }
      
      if (!messageInput.value){
          validForm = false;
          invalidateElement(messageInput);
      }
  };
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation = true;
    validateInputs();
    if (validForm) {
      form.remove();
      thankYou.classList.remove("hidden");
    }
  });
  
  inputs.forEach((input) => {
      input.addEventListener("input", () =>{
          validateInputs();
      });
  });