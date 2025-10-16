const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");
// const empreendedorForm = document.getElementById("empreendedorForm");
// const btnEmpreendedor = document.getElementById("btnEmpreendedor");
// const btnEstudante = document.getElementById("btnEstudante");
// const estudanteForm = document.getElementById("estudanteForm");
// const btnDocente = document.getElementById("btnDocente");
// const docenteForm = document.getElementById("docenteForm");
// const btnCoordenador = document.getElementById("btnCoordenador");
// const coordenadorForm = document.getElementById("coordenadorForm");

tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginBox.style.display = "block";
  registerBox.style.display = "none";
  empreendedorForm.style.display = "none";
  estudanteForm.style.display = "none";
  docenteForm.style.display = "none";
  coordenadorForm.style.display = "none";
});

tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerBox.style.display = "block";
  loginBox.style.display = "none";
  empreendedorForm.style.display = "none";
  estudanteForm.style.display = "none";
  docenteForm.style.display = "none";
  coordenadorForm.style.display = "none";
});

// btnEmpreendedor.addEventListener("click", () => {
//   registerBox.style.display = "none";
//   empreendedorForm.style.display = "block";
// });

// btnEstudante.addEventListener("click", () => {
//   registerBox.style.display = "none";
//   empreendedorForm.style.display = "none";
//   estudanteForm.style.display = "block";
// });

// btnDocente.addEventListener("click", () => {
//   registerBox.style.display = "none";
//   empreendedorForm.style.display = "none";
//   estudanteForm.style.display = "none";
//   docenteForm.style.display = "block";
// });

// btnCoordenador.addEventListener("click", () => {
//   registerBox.style.display = "none";
//   empreendedorForm.style.display = "none";
//   estudanteForm.style.display = "none";
//   docenteForm.style.display = "none";
//   coordenadorForm.style.display = "block";
// });
