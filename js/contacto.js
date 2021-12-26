 $(document).ready(function(){    
    $('#boton-guardar').click(function(){                
        var nom = document.getElementById("nombretxt").value;
        var mail = document.getElementById("Emailtxt").value;
        var tel = document.getElementById("Telefonotxt").value;
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Email", mail);
        localStorage.setItem("Telefono", tel);
        document.getElementById("nombretxt").value = "";
        document.getElementById("Emailtxt").value = "";
        document.getElementById("Telefonotxt").value = "";
    });   
});

$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        var nombre = localStorage.getItem("Nombre");
        var Email = localStorage.getItem("Email");
        var Telefono = localStorage.getItem("Telefono");
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("Email").innerHTML = Email; 
        document.getElementById("Telefono").innerHTML = Telefono; 
    });   
});


function mostrarContacto() {
    document.getElementById("contactos2").innerHTML = `<h6> <ion-icon name="call-outline"></ion-icon> Francisco Marcó: 3571 66-2543</h6> 
    <h6><ion-icon name="call-outline"></ion-icon> Luciano Sacraida: 3571 63-8870</h6>`;

    
}