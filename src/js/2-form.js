let formData = {
  email: "",
  message: ""
};

const saveToLocalStorage = () => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem("feedback-form-state");
  if (storedData) {
    formData = JSON.parse(storedData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
};

const handleInput = (event) => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" };
  document.querySelector('input[name="email"]').value = "";
  document.querySelector('textarea[name="message"]').value = "";
};

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
