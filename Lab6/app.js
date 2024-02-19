function show() {
    const p = document.getElementById("password");
    p.setAttribute("type", "text");
}

function hide() {
    const p = document.getElementById("password");
    p.setAttribute("type", "password");
}

let passwordShown = false; 
const symbols = /[!@#$%&]/g;
const numbers = /[0-9]/g;


function decideToShow(){ 
    if (passwordShown == false) {
        passwordShown = true;
        show();
    } else{
        passwordShown = false;
        hide();
    }
}

function verify() {  
    const p = document.getElementById("password").value;
    
    const symbols = /[!@#$%&]/g.test(p);
    const numbers = /[0-9]/g.test(p);
    const mayusculas = /[A-Z]/g.test(p);
    const minusculas = /[a-z]/g.test(p);

    const warnSymbol = document.getElementById("symbolWarning");
    const warnNum = document.getElementById("numberWarning");
    const warnMayusculas = document.getElementById("mayusculasWarning");
    const warnMinusculas = document.getElementById("minusculasWarning");

    const successMessage = document.getElementById("successMessage");

    warnSymbol.textContent = symbols ? "" : "Asegúrate de que la contraseña incluya símbolos";
    warnNum.textContent = numbers ? "" : "Asegúrate de que la contraseña incluya números";
    warnMayusculas.textContent = mayusculas ? "" : "Asegúrate de que la contraseña incluya mayúsculas";
    warnMinusculas.textContent = minusculas ? "" : "Asegúrate de que la contraseña incluya minusculas";
    
    if (warnSymbol.textContent === "" && warnNum.textContent === "" && warnMayusculas.textContent === "" && warnMinusculas.textContent === "") {
        successMessage.textContent = "La contraseña ha sido validada";
    } else {
        successMessage.textContent = "";
    }
  }

document.getElementById("eye").addEventListener("click", decideToShow, false); // Removed parentheses after function name
document.getElementById("verify").addEventListener("click", verify, false); // Removed parentheses after function name
