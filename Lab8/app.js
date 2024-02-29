// app.js

// Import the required modules
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Verifier</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        
        <script src="https://kit.fontawesome.com/c5614e6e6c.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class= "column is-centered">
        <div class="field has-addons">
            <div  class = "control" >
                <input  type = "password" class="input is-half"  id = "password"></input>
            </div>
            <div class="control">
                <button type="button" class="button is-black" id="verify">Verify</button>
                <button type = "button" class="button is-black" id="eye"><i class="fa-regular fa-eye"></i></button>
            </div>  
            </div>
            <p class="has-text-danger" id="symbolWarning"></p>
            <p class="has-text-danger" id="numberWarning"></p>
            <p class="has-text-danger" id="mayusculasWarning"></p>
            <p class="has-text-danger" id="minusculasWarning"></p>
            <p class="has-text-success" id="successMessage"></p>
            
        </div>
        <ul>
            <li>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</li>
            <p>Para mejorar la UX dandole retroalimentación a este</p>
            <li>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</li>
            <p>Desactivandolo ya sea con la consola o que el navegador te lo permita (Safari te estoy viendo)</p>
            <li>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</li>
            <p>Por la retroalimentación brindada por el JS</p>
        </ul>
        <script>
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
        
        </script>
    </body>
    </html>`)
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
