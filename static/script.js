// =============================
// Alternar telas
// =============================
function showRegister() {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("registerCard").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerCard").classList.add("hidden");
    document.getElementById("loginCard").classList.remove("hidden");
}

// =============================
// Barra de força da senha
// =============================
function verificarForcaSenha() {
    const senha = document.getElementById("newPassword").value;
    const barra = document.getElementById("strengthBar");
    const texto = document.getElementById("strengthText");

    let forca = 0;

    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) forca++;

    if (senha.length === 0) {
        barra.style.width = "0%";
        texto.textContent = "Digite uma senha";
        return;
    }

    switch (forca) {
        case 1:
            barra.style.width = "25%";
            barra.style.background = "#ef4444";
            texto.textContent = "Senha fraca";
            break;

        case 2:
            barra.style.width = "50%";
            barra.style.background = "#f59e0b";
            texto.textContent = "Senha média";
            break;

        case 3:
            barra.style.width = "75%";
            barra.style.background = "#3b82f6";
            texto.textContent = "Senha boa";
            break;

        case 4:
            barra.style.width = "100%";
            barra.style.background = "#22c55e";
            texto.textContent = "Senha forte";
            break;

        default:
            barra.style.width = "10%";
            barra.style.background = "#ef4444";
            texto.textContent = "Senha muito fraca";
    }
}

// =============================
// Validação final no cadastro
// =============================
document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const senha = document.getElementById("newPassword").value;

            if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
                alert("A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula e um número.");
                return;
            }

            alert("Conta criada com sucesso!");
            showLogin();
        });
    }

});
// Alternar tema
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const botao = document.querySelector(".theme-toggle");

    if (document.body.classList.contains("light-mode")) {
        botao.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        botao.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// Manter tema salvo
window.onload = function() {
    const temaSalvo = localStorage.getItem("theme");

    if (temaSalvo === "light") {
        document.body.classList.add("light-mode");
        document.querySelector(".theme-toggle").textContent = "☀️";
    }
};