document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    // Limpa mensagens anteriores
    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");
    document.getElementById("formStatus").textContent = "";
  
    // Validação simples
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "") {
      showError("nameError", "Por favor, preencha o nome.");
      isValid = false;
    }
  
    if (email === "" || !validateEmail(email)) {
      showError("emailError", "Digite um e-mail válido.");
      isValid = false;
    }
  
    if (message.length < 10) {
      showError("messageError", "A mensagem deve ter pelo menos 10 caracteres.");
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("formStatus").textContent = "Formulário enviado com sucesso!";
      document.getElementById("formStatus").style.color = "green";
      // Aqui você pode enviar os dados com fetch/AJAX
      document.getElementById("contactForm").reset();
    } else {
      document.getElementById("formStatus").textContent = "Por favor, corrija os erros.";
      document.getElementById("formStatus").style.color = "red";
    }
  });
  
  function showError(id, message) {
    const el = document.getElementById(id);
    el.textContent = message;
    el.style.display = "block";
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
  