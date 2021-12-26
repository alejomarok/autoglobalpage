console.log("hola");
const URLJSON = "../json/unidades.json"


$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad').prepend(`
          <h1> ${misDatos[0].unidad}</h1> 
         <hr></hr>
                             `)

    $('#datos').prepend(`
            <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[0].version}</h3>
            <hr>                        <h3><u>COLOR:</u> ${misDatos[0].color}</h3>
            <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[0].combustible}</h3>
            <hr>                        <h3><u>AÑO:</u> ${misDatos[0].año}</h3>
            <hr>                        <h3><u>KMS:</u> ${misDatos[0].kms}</h3>
            <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[0].precio}</h3>
                                `)
  }
});
$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad1').prepend(`
            <h1> ${misDatos[1].unidad}</h1> 
           <hr></hr>
                               `)

    $('#datos1').prepend(`
              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[1].version}</h3>
              <hr>                        <h3><u>COLOR:</u> ${misDatos[1].color}</h3>
              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[1].combustible}</h3>
              <hr>                        <h3><u>AÑO:</u> ${misDatos[1].año}</h3>
              <hr>                        <h3><u>KMS:</u> ${misDatos[1].kms}</h3>
              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[1].precio}</h3>
                                  `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad2').prepend(`
              <h1> ${misDatos[2].unidad}</h1> 
             <hr></hr>
                                 `)

    $('#datos2').prepend(`
                <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[2].version}</h3>
                <hr>                        <h3><u>COLOR:</u> ${misDatos[2].color}</h3>
                <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[2].combustible}</h3>
                <hr>                        <h3><u>AÑO:</u> ${misDatos[2].año}</h3>
                <hr>                        <h3><u>KMS:</u> ${misDatos[2].kms}</h3>
                <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[2].precio}</h3>
                                    `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad3').prepend(`
                <h1> ${misDatos[3].unidad}</h1> 
               <hr></hr>
                                   `)

    $('#datos3').prepend(`
                  <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[3].version}</h3>
                  <hr>                        <h3><u>COLOR:</u> ${misDatos[3].color}</h3>
                  <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[3].combustible}</h3>
                  <hr>                        <h3><u>AÑO:</u> ${misDatos[3].año}</h3>
                  <hr>                        <h3><u>KMS:</u> ${misDatos[3].kms}</h3>
                  <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[3].precio}</h3>
                                      `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad4').prepend(`
                  <h1> ${misDatos[4].unidad}</h1> 
                 <hr></hr>
                                     `)

    $('#datos4').prepend(`
                    <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[4].version}</h3>
                    <hr>                        <h3><u>COLOR:</u> ${misDatos[4].color}</h3>
                    <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[4].combustible}</h3>
                    <hr>                        <h3><u>AÑO:</u> ${misDatos[4].año}</h3>
                    <hr>                        <h3><u>KMS:</u> ${misDatos[4].kms}</h3>
                    <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[4].precio}</h3>
                                        `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad5').prepend(`
                    <h1> ${misDatos[5].unidad}</h1> 
                   <hr></hr>
                                       `)

    $('#datos5').prepend(`
                      <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[5].version}</h3>
                      <hr>                        <h3><u>COLOR:</u> ${misDatos[5].color}</h3>
                      <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[5].combustible}</h3>
                      <hr>                        <h3><u>AÑO:</u> ${misDatos[5].año}</h3>
                      <hr>                        <h3><u>KMS:</u> ${misDatos[5].kms}</h3>
                      <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[5].precio}</h3>
                                          `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad6').prepend(`
                      <h1> ${misDatos[6].unidad}</h1> 
                     <hr></hr>
                                         `)

    $('#datos6').prepend(`
                        <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[6].version}</h3>
                        <hr>                        <h3><u>COLOR:</u> ${misDatos[6].color}</h3>
                        <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[6].combustible}</h3>
                        <hr>                        <h3><u>AÑO:</u> ${misDatos[6].año}</h3>
                        <hr>                        <h3><u>KMS:</u> ${misDatos[6].kms}</h3>
                        <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[6].precio}</h3>
                                            `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad7').prepend(`
                        <h1> ${misDatos[7].unidad}</h1> 
                       <hr></hr>
                                           `)

    $('#datos7').prepend(`
                          <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[7].version}</h3>
                          <hr>                        <h3><u>COLOR:</u> ${misDatos[7].color}</h3>
                          <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[7].combustible}</h3>
                          <hr>                        <h3><u>AÑO:</u> ${misDatos[7].año}</h3>
                          <hr>                        <h3><u>KMS:</u> ${misDatos[7].kms}</h3>
                          <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[7].precio}</h3>
                                              `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad8').prepend(`
                          <h1> ${misDatos[8].unidad}</h1> 
                         <hr></hr>
                                             `)

    $('#datos8').prepend(`
                            <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[8].version}</h3>
                            <hr>                        <h3><u>COLOR:</u> ${misDatos[8].color}</h3>
                            <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[8].combustible}</h3>
                            <hr>                        <h3><u>AÑO:</u> ${misDatos[8].año}</h3>
                            <hr>                        <h3><u>KMS:</u> ${misDatos[8].kms}</h3>
                            <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[8].precio}</h3>
                                                `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad9').prepend(`
                            <h1> ${misDatos[9].unidad}</h1> 
                           <hr></hr>
                                               `)

    $('#datos9').prepend(`
                              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[9].version}</h3>
                              <hr>                        <h3><u>COLOR:</u> ${misDatos[9].color}</h3>
                              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[9].combustible}</h3>
                              <hr>                        <h3><u>AÑO:</u> ${misDatos[9].año}</h3>
                              <hr>                        <h3><u>KMS:</u> ${misDatos[9].kms}</h3>
                              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[9].precio}</h3>
                                                  `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad10').prepend(`
                              <h1> ${misDatos[10].unidad}</h1> 
                             <hr></hr>
                                                 `)

    $('#datos10').prepend(`
                                <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[10].version}</h3>
                                <hr>                        <h3><u>COLOR:</u> ${misDatos[10].color}</h3>
                                <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[10].combustible}</h3>
                                <hr>                        <h3><u>AÑO:</u> ${misDatos[10].año}</h3>
                                <hr>                        <h3><u>KMS:</u> ${misDatos[10].kms}</h3>
                                <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[10].precio}</h3>
                                                    `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad11').prepend(`
                                <h1> ${misDatos[11].unidad}</h1> 
                               <hr></hr>
                                                   `)

    $('#datos11').prepend(`
                                  <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[11].version}</h3>
                                  <hr>                        <h3><u>COLOR:</u> ${misDatos[11].color}</h3>
                                  <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[11].combustible}</h3>
                                  <hr>                        <h3><u>AÑO:</u> ${misDatos[11].año}</h3>
                                  <hr>                        <h3><u>KMS:</u> ${misDatos[11].kms}</h3>
                                  <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[11].precio}</h3>
                                                      `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad12').prepend(`
                                  <h1> ${misDatos[12].unidad}</h1> 
                                 <hr></hr>
                                                     `)

    $('#datos12').prepend(`
                                    <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[12].version}</h3>
                                    <hr>                        <h3><u>COLOR:</u> ${misDatos[12].color}</h3>
                                    <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[12].combustible}</h3>
                                    <hr>                        <h3><u>AÑO:</u> ${misDatos[12].año}</h3>
                                    <hr>                        <h3><u>KMS:</u> ${misDatos[12].kms}</h3>
                                    <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[12].precio}</h3>
                                                        `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad13').prepend(`
                                    <h1> ${misDatos[13].unidad}</h1> 
                                   <hr></hr>
                                                       `)

    $('#datos13').prepend(`
                                      <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[13].version}</h3>
                                      <hr>                        <h3><u>COLOR:</u> ${misDatos[13].color}</h3>
                                      <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[13].combustible}</h3>
                                      <hr>                        <h3><u>AÑO:</u> ${misDatos[13].año}</h3>
                                      <hr>                        <h3><u>KMS:</u> ${misDatos[13].kms}</h3>
                                      <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[13].precio}</h3>
                                                          `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);

    $('#unidad14').prepend(`
                                      <h1> ${misDatos[14].unidad}</h1> 
                                     <hr></hr>
                                                         `)

    $('#datos14').prepend(`
                                        <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[14].version}</h3>
                                        <hr>                        <h3><u>COLOR:</u> ${misDatos[14].color}</h3>
                                        <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[14].combustible}</h3>
                                        <hr>                        <h3><u>AÑO:</u> ${misDatos[14].año}</h3>
                                        <hr>                        <h3><u>KMS:</u> ${misDatos[14].kms}</h3>
                                        <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[14].precio}</h3>
                                                            `)
  }
});




$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);
    $('#unidad15').prepend(`
            <h1> ${misDatos[15].unidad}</h1> 
           <hr></hr>
                               `)
    $('#datos15').prepend(`
              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[15].version}</h3>
              <hr>                        <h3><u>COLOR:</u> ${misDatos[15].color}</h3>
              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[15].combustible}</h3>
              <hr>                        <h3><u>AÑO:</u> ${misDatos[15].año}</h3>
              <hr>                        <h3><u>KMS:</u> ${misDatos[15].kms}</h3>
              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[15].precio}</h3>
                                  `)
  }
});


$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);
    $('#unidad16').prepend(`
            <h1> ${misDatos[16].unidad}</h1> 
           <hr></hr>
                               `)
    $('#datos16').prepend(`
              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[16].version}</h3>
              <hr>                        <h3><u>COLOR:</u> ${misDatos[16].color}</h3>
              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[16].combustible}</h3>
              <hr>                        <h3><u>AÑO:</u> ${misDatos[16].año}</h3>
              <hr>                        <h3><u>KMS:</u> ${misDatos[16].kms}</h3>
              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[16].precio}</h3>
                                  `)
  }
});

$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);
    $('#unidad17').prepend(`
            <h1> ${misDatos[17].unidad}</h1> 
           <hr></hr>
                               `)
    $('#datos17').prepend(`
              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[17].version}</h3>
              <hr>                        <h3><u>COLOR:</u> ${misDatos[17].color}</h3>
              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[17].combustible}</h3>
              <hr>                        <h3><u>AÑO:</u> ${misDatos[17].año}</h3>
              <hr>                        <h3><u>KMS:</u> ${misDatos[17].kms}</h3>
              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[17].precio}</h3>
                                  `)
  }
});


$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    console.log(respuesta);
    $('#unidad18').prepend(`
            <h1> ${misDatos[18].unidad}</h1> 
           <hr></hr>
                               `)
    $('#datos18').prepend(`
              <hr>                    <h3><u>VERSIÓN:</u> ${misDatos[18].version}</h3>
              <hr>                        <h3><u>COLOR:</u> ${misDatos[18].color}</h3>
              <hr>                        <h3><u>COMBUSTIBLE:</u> ${misDatos[18].combustible}</h3>
              <hr>                        <h3><u>AÑO:</u> ${misDatos[18].año}</h3>
              <hr>                        <h3><u>KMS:</u> ${misDatos[18].kms}</h3>
              <hr>                        <h3><u>PRECIO:</u> $ ${misDatos[18].precio}</h3>
                                  `)
  }
});










$(document).ready(function () {
  $('#boton-guardar').click(function () {
    var se = document.getElementById("señatxt").value;
    var nom = document.getElementById("nombretxt").value;
    var mail = document.getElementById("Emailtxt").value;
    var tel = document.getElementById("Telefonotxt").value;
    localStorage.setItem("Seña", se);
    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Email", mail);
    localStorage.setItem("Telefono", tel);
    document.getElementById("señatxt").value = "";
    document.getElementById("nombretxt").value = "";
    document.getElementById("Emailtxt").value = "";
    document.getElementById("Telefonotxt").value = "";
    alert("¡Muchas gracias! Pronto nos comunicaremos contigo para acordar metodos de pago. ATTE: AUTOGLOBAL")
  });
});

$(document).ready(function () {
  $('#boton-cargar').click(function () {
    var seña = localStorage.getItem("Seña");
    var nombre = localStorage.getItem("Nombre");
    var Email = localStorage.getItem("Email");
    var Telefono = localStorage.getItem("Telefono");
    document.getElementById("seña").innerHTML = seña;
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("Email").innerHTML = Email;
    document.getElementById("Telefono").innerHTML = Telefono;

  });
});

let ayuda = getElementById("ayuda");

function ayudar() {
  alert("realizando la seña de este vehiculo haces tu reserva, recuerda que la seña debe corresponder minimo al 5% del valor del vehiculo")
}