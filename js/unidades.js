
const URLJSON = "json/unidades.json"


$('#boton0').prepend('<button id="btn0" class="btn btn-primary btn-lg">ver información</button>');
$("#btn0").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion0').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[0].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[0].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[0].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[0].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[0].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[0].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[0].precio}</h5>
                            `)
    }
    });
});


$('#boton1').prepend('<button id="btn1" class="btn btn-primary btn-lg">ver información</button>');
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion1').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[1].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[1].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[1].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[1].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[1].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[1].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[1].precio}</h5>
                            `)
    }
    });
});

$('#boton2').prepend('<button id="btn2" class="btn btn-primary btn-lg">ver información</button>');
$("#btn2").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion2').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[2].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[2].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[2].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[2].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[2].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[2].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[2].precio}</h5>
                            `)
    }
    });
});

$('#boton3').prepend('<button id="btn3" class="btn btn-primary btn-lg">ver información</button>');
$("#btn3").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion3').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[3].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[3].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[3].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[3].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[3].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[3].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[3].precio}</h5>
                            `)
    }
    });
});

$('#boton4').prepend('<button id="btn4" class="btn btn-primary btn-lg">ver información</button>');
$("#btn4").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion4').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[0].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[4].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[4].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[4].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[4].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[4].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[4].precio}</h5>
                            `)
    }
    });
});

$('#boton5').prepend('<button id="btn5" class="btn btn-primary btn-lg">ver información</button>');
$("#btn5").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion5').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[5].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[5].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[5].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[5].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[5].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[5].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[5].precio}</h5>
                            `)
    }
    });
});

$('#boton6').prepend ('<button id="btn6" class="btn btn-primary btn-lg">ver información</button>');
$("#btn6").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion6').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[6].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[6].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[6].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[6].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[6].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[6].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[6].precio}</h5>
                            `)
    }
    });
});

$('#boton7').prepend('<button id="btn7" class="btn btn-primary btn-lg">ver información</button>');
$("#btn7").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion7').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[7].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[7].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[7].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[7].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[7].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[7].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[7].precio}</h5>
                            `)
    }
    });
});

$('#boton8').prepend('<button id="btn8" class="btn btn-primary btn-lg">ver información</button>');
$("#btn8").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion8').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[8].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[8].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[8].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[8].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[8].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[8].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[8].precio}</h5>
                            `)
    }
    });
});

$('#boton9').prepend('<button id="btn9" class="btn btn-primary btn-lg">ver información</button>');
$("#btn9").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion9').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[9].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[9].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[9].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[9].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[9].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[9].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[9].precio}</h5>
                            `)
    }
    });
});

$('#boton10').prepend('<button id="btn10" class="btn btn-primary btn-lg">ver información</button>');
$("#btn10").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion10').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[10].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[10].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[10].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[10].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[10].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[10].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[10].precio}</h5>
                            `)
    }
    });
});

$('#boton11').prepend('<button id="btn11" class="btn btn-primary btn-lg">ver información</button>');
$("#btn11").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);

        $('#informacion11').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[11].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[11].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[11].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[11].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[11].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[11].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[11].precio}</h5>
                            `)
    }
    });
});

$('#boton12').prepend('<button id="btn12" class="btn btn-primary btn-lg">ver información</button>');
$("#btn12").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion12').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[12].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[12].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[12].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[12].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[12].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[12].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[12].precio}</h5>
                            `)
    }
    });
});

$('#boton13').prepend('<button id="btn13" class="btn btn-primary btn-lg">ver información</button>');
$("#btn13").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion13').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[13].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[13].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[13].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[13].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[13].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[13].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[13].precio}</h5>
                            `)
    }
    });
});

$('#boton14').prepend('<button id="btn14" class="btn btn-primary btn-lg">ver información</button>');
$("#btn14").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion14').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[14].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[14].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[14].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[14].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[14].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[14].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[14].precio}</h5>
                            `)
    }
    });
});

$('#boton15').prepend('<button id="btn15" class="btn btn-primary btn-lg">ver información</button>');
$("#btn15").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion15').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[15].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[15].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[15].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[15].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[15].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[15].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[15].precio}</h5>
                            `)
    }
    });
});

$('#boton16').prepend('<button id="btn16" class="btn btn-primary btn-lg">ver información</button>');
$("#btn16").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion16').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[16].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[16].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[16].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[16].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[16].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[16].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[16].precio}</h5>
                            `)
    }
    });
});

$('#boton17').prepend('<button id="btn17" class="btn btn-primary btn-lg">ver información</button>');
$("#btn17").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion17').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[17].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[17].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[17].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[17].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[17].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[17].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[17].precio}</h5>
                            `)
    }
    });
});

$('#boton18').prepend('<button id="btn18" class="btn btn-primary btn-lg">ver información</button>');
$("#btn18").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      console.log(respuesta);
        $('#informacion18').prepend(`
        <hr> <h4><u>VEHICULO:</u> ${misDatos[18].unidad}</hr></h4> 
        <hr>                    <h6><u>VERSIÓN:</u> ${misDatos[18].version}</h5>
        <hr>                        <h6><u>COLOR:</u> ${misDatos[18].color}</h5>
        <hr>                        <h6><u>COMBUSTIBLE:</u> ${misDatos[18].combustible}</h5>
        <hr>                        <h6><u>AÑO:</u> ${misDatos[18].año}</h5>
        <hr>                        <h6><u>KMS:</u> ${misDatos[18].kms}</h5>
        <hr>                        <h6><u>PRECIO:</u> $ ${misDatos[18].precio}</h5>
                            `)
    }
    });
});