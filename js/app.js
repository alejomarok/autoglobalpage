//let nombre = prompt("ingresa tu nombre y apellido");

console.log("bienvenido al console log de autoglobal!")
function bienvenida (){
    let divtexto = document.getElementById ("title");
divtexto.innerText = "¡Bienvenido a Autoglobal multimarcas!" ; 
}
bienvenida(); 
//alert (`recuerda ${nombre} que las señas realizadas deben corresponder al 3% del precio total de la unidad`)


// let pesos = prompt("ingresa la cantidad que deseas financiar"); 
// let interes = 1.30
//  function convertidor (pesos, interes) {
//     resultado = pesos * interes;
// }

// function mostrar (mensaje) {
//     document.write ( "<h3>" + resultado + "</h3>" )
// }
// document.write ("<h3>" + "el costo total de lo que deseas financiar con el interes anueal" + "$" + "</h3>" )
// convertidor(pesos, interes);
// mostrar(resultado); 

/*function unidad (marca, nombre, color, kilometros, año, precio,){
    this.marca = marca;
    this.nombre = nombre;
    this.color = color;
    this.kilometros = kilometros;
    this.año = año;
    this.precio = precio
}
*/
//const unidad1 = new unidad ("jeep", "renegade", "negra", "100000", "2015", "2000000")


//console.log (unidad1)

/*function fichaTecnica (){
    let divtexto = document.getElementById ("title");
divtexto.innerText = "¡Bienvenido a autoglobal  " + nombre + "!" ; 
}*/
//document.write ( `</h1>marca: ${unidad1.marca}<br> nombre: ${unidad1.nombre}<br>color: ${unidad1.color}<br>kilometros: ${unidad1.kilometros}<br>año: ${unidad1.año}<br>precio: ${unidad1.precio}</h1>`)


                                  //UNIDADES




//const marcas = [ 'Ford', 'Renault', 'Jeep', 'Fiat', 'Peugeot']

//marcas.sort ()



//console.log(marcas)



//const Itemlist = document.createElement("li");

//let title = document.getElementById("title")
//title.innerHtml = "<span>AUTOGLOBAL </span>"

 /*
function agradecer (){
    let divtexto = document.getElementById ("textoSeña");
divtexto.innerText = "gracias por su seña ";
}
*/
let flyers = document.getElementById ("imagenUnidad");

function cambiarImg1() {
    flyers.src = "../AUGLOBAL/IMG/FLYERS/FLYER2.jpg"
}

function cambiarImg2 () {
    flyers.src = "../AUTOGLOBAL/IMG/FLYERS/FLYER3.jpg"
}


/*const productos = [{ id: 1,  producto: "jeep", precio: 2000000 },
                  {  id: 2,  producto: "Ford Ka", precio: 700000 },
                  {  id: 3,  producto: "Ford Focus"  , precio: 2000000},
                  {  id: 4,  producto: "Clio" , precio: 1000000}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));

let producto   = { id: 1,  nombre: "Jeep Renegade", precio: 2000000 };
let contenedor = document.getElementById("caracteristicas");

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;


            //FINANCIACIÓN 

const rango = document.querySelector("#rango")
const numero = document.querySelector("#numero") 

rango.oninput = () => {
    numero.innerHTML = rango.value 
}

function maxInput() {
   document.getElementById ("rango").max =  2000000 / 2; 
} 

maxInput ();  */          
/*                         
const valorJepp = 2000000; 
const interesAnual = 1.50; 
const interesAnual2 = 2; 
const interesAnual3 = 2.5; 
function int(valorJeep, interesAnual) {
    resultado = valorJeep * interesAnual; 
}
   ////////////////////////////////////
$(document).ready(function(){    
    $('#boton-guardar').click(function(){      
      var cantidadParaFinanciar = document.getElementById("valorJeepNumb").value;          
        var interesAnual = document.getElementById("interesAnualNumb").value;

       localStorage.setItem("cantidadParaFinanciar", cantidadParaFinanciar);
       localStorage.setItem("InteresAnual", interesAnual);

        document.getElementById("valorJeepNumb").value = "";
        document.getElementById("interesAnualNumb").value = "";
   });   
    });
  */   

    var cantidadParaFinanciar = Number;
    var interesAnual = Number;
    var status = Number;

        //submit
        function sub(){
            cantidadParaFinanciar = parseFloat(document.getElementById("cantidadParaFinanciar").value);
            interesAnual = parseFloat(document.getElementById("interesAnual").value);
         alert(cantidadParaFinanciar+" "+interesAnual );
        };
        
        
       /*   cantidadParaFinanciar = parseInt();
        interesAnual = parseInt();
    function int(cantidadParaFinanciar, interesAnual) {
        resultado = cantidadParaFinanciar * interesAnual; 
    }*/
var interesAnual2 = Number;
var interesAnual3 = Number; 

    function convertidorNumberConstructor() {
        interesAnual2 = interesAnual * 2; 
        interesAnual3 = interesAnual * 3;
    }


//1 año


function calcularInteres1() {
   resultadoInteres1 = (cantidadParaFinanciar*(interesAnual/100)) + cantidadParaFinanciar
    
}
function mostrarResultado () {
    let divtexto = document.getElementById ("IA");
    divtexto.innerText = "con el interes anual te queda en $ " + resultadoInteres1 + " y cuotas de $ " + cuotas1 ;
}

function calcularInteres2() {
    resultadoInteres2 = (cantidadParaFinanciar*(interesAnual2/100)) + cantidadParaFinanciar
     
 }
 function mostrarResultado2 () {
     let divtexto = document.getElementById ("IA");
     divtexto.innerText = "con el interes anual te queda en $ " + resultadoInteres2 + " y cuotas de $ " + cuotas2 ;
 }

 function calcularInteres3() {
    resultadoInteres3 = (cantidadParaFinanciar*(interesAnual3/100)) + cantidadParaFinanciar
     
 }
 function mostrarResultado3 () {
     let divtexto = document.getElementById ("IA");
     divtexto.innerText = "con el interes anual te queda en $ " + resultadoInteres3 + " y cuotas de $ " + cuotas3 ;
 }
 
 
 function CalcularCuotas() {
    cuotas1 = resultadoInteres1 / 12
    
}
function CalcularCuotas2() {
    cuotas2 = resultadoInteres2 / 24
    
}
function CalcularCuotas3() {
    cuotas3 = resultadoInteres3 / 36
    
}
//int (cantidadParaFinanciar, interesAnual);
CalcularCuotas(); 
CalcularCuotas2(); 
CalcularCuotas3(); 

/*

function mostrar () {
        let divtexto = document.getElementById ("IA");
        divtexto.innerText = "con el interes anual te queda en $ " + resultado + " y cuotas de $ " + cuota ;
}
function int1(cantidadParaFinanciar, interesAnual) {
    resultado = cantidadParaFinanciar * interesAnual; 
}

function int2(cantidadParaFinanciar, interesAnual2) {
    resultado2 = cantidadParaFinanciar * interesAnual2; 
}

function CalcularCuotas2 () {
    cuota2 = resultado2 / 24
    
}
int2 (cantidadParaFinanciar, interesAnual2);
CalcularCuotas2(); 
    function mostrar2 () {
        let divtexto = document.getElementById ("IA");
        divtexto.innerText = "con el interes anual te queda en $ " + resultado2 + " y cuotas de $ " + cuota2 ;
}

function int3(cantidadParaFinanciar, interesAnual3) {
    resultado3 = cantidadParaFinanciar * interesAnual3; 
}

function CalcularCuotas3 () {
    cuota3 = resultado3 / 36
    
}
int3 (cantidadParaFinanciar, interesAnual3);
CalcularCuotas3(); 
    function mostrar3 () {
        let divtexto = document.getElementById ("IA");
        divtexto.innerText = "con el interes anual te queda en $ " + resultado3 + " y cuotas de $ " + cuota3 ;
}

*/

//_________________________

/*
const URLJSON = "js/unidades.json"
$("body").prepend('<button id="btn1">JSON</button>');

$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#caracteristicasUnidades').prepend(`<div>
                                <h3>${misDatos[0].unidad}</h3>
                                <p> ${misDatos[0].año}</p>
                            </div>`) 
    }
    });
});
*/
/* $(document).ready(function () {
    $("leer").click (function (e) {
        e.preventDeFault();
        $.get("archivo.txt", function(data,textStatus,jqXHR){
            console.log (data);
    })
    
});


$('#verMas').click (function(e) {
    e.preventDefault();
    $.get ("js/unidades.json" , function(data){
        console.log(data);
          $('#caracteristicasUnidades').html(`
            modelo : ${data.unidad} <br>
            año : ${data.año} <br>
            precio : ${data.precio} <br>
            kms : ${data.kms} <br>
            `);
        });
    });
});    
*/ 


//AJAX JSON APLICADO EN UNIDADES.HTML
/*
var final = document.getElementById ("info");

function ajax_get_json() {
    var xmlhttp;

    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } 
    else {
        xmlhttp = new ActiveXObject ("Microsoft.XMLHTTP")
    }
   xmlhttp.onreadystatechange = function () {
       if(xmlhttp.readystate === 4 && xmlhttp.status === 200){
           var unidades = JSON.parse (xmlhttp.responseText);
           if(final.innerHTML === ""){
               for (var i in unidades){
                   final.innerHTML += unidades [i].unidad + unidades [i].version + "<hr/>"
               }
           }

       }
   }
   xmlhttp.open("GET", "js/unidades.json", true);
   xmlhttp.send();

}



$('#boton0').prepend('<button id="btn0">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn0").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
    //   for (const dato of misDatos) {
        $('#informacion0').prepend(`
                                <h4>${misDatos[0].unidad}</h4>
                                <h5> ${misDatos[0].version}</h5>
                                <h5> ${misDatos[0].color}</h5>
                                <h5> ${misDatos[0].combustible}</h5>
                                <h5> ${misDatos[0].año}</h5>
                                <h5> ${misDatos[0].kms}</h5>
                                <h5> ${misDatos[0].precio}</h5>
                            `)
    //   }  
    }
    });
}); */