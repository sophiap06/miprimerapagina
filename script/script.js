 function showAlert() { alert ('¡Hola, esta es una alerta desde JavaScript'); 

}

/*Codigo barra de navegacion*/
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})