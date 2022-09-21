function validar_identificacion() {
    let Cedula = document.formBuscar.Cedula;
    let longitudCedula = Cedula.value.length;

    if (longitudCedula == 0) {
        alert("Deber registrar un numero de cédula")
        Cedula.focus();
    } 
}

function validar_TDD() {
    

    if (document.getElementById("TDD").checked) {
        alert("Empleado actualizado");

    } else {
        alert("Debe aceptar el tratamiento de datos");
        TDD.focus();    
    }
}

function validar_TDD2() {
    

    if (document.getElementById("TDD").checked) {
        alert("Empleado eliminado");

    } else {
        alert("Debe aceptar el tratamiento de datos");
        TDD.focus();    
    }
}

function validar_TDD_registrar() {
    if (document.getElementById("TDD").checked) {
        alert("Empleado registrado");

    } else {
        alert("Debe aceptar el tratamiento de datos");
        TDD.focus();    
    }
}
