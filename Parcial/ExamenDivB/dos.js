function mostrar() {
    let nacionalidadIngresada;
    let resultado;
    let edadIngresada;
    let cepa;
    let contadorPersona = 0;
    let contadorPositivo = 0;
    let contadorNegativo = 0;
    let porcentajePositivo;
    let porcentajeNegativo;
    let contadorDelta = 0;
    let contadorAlfa = 0;
    let contadorBeta = 0;
    let contadorNinguna = 0;
    let ingresoLaPrimerEdad = false;
    let contadorArgentinosD = 0;

    while (contadorPersona < 8) {

        nacionalidadIngresada = prompt("Ingrese su nacionalidad.()");
        while (nacionalidadIngresada != "argentina" && nacionalidadIngresada != "extranjero") {
            nacionalidadIngresada = prompt("Error, ingrese su nacionalidad nuevamente. ()");
        }

        edadIngresada = prompt("Ingrese su edad");
        edadIngresada = parseInt(edadIngresada);
        while (edadIngresada > 65 || edadIngresada < 18) {
            edadIngresada = prompt("error, ingrese su edad nuevamente");
            edadIngresada = parseInt(edadIngresada);
        }

        resultado = prompt("Ingrese su resultado. ()");
        while (isNaN(resultado) == false || resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("Error, ingrese su resultado nuevamente. ()");
        }
        cepa = prompt("Ingrese su cepa");

        while (cepa != "delta" && cepa != "alfa" && cepa != "beta" && cepa != "ninguna") {
            cepa = prompt("error, ingrese su cepa");
        }

        if (nacionalidadIngresada == "extranjero" && resultado == "positivo" && edadIngresada > edadMaximo || ingresoLaPrimerEdad == false) {
            edadMaximo = edadIngresada;
            ingresoLaPrimerEdad = true;
        }

        switch (resultado) {
            case "positivo":
                contadorPositivo++;
                break;
            case "negativo":
                contadorNegativo++;
                break;
        }
        switch (cepa) {
            case "delta":
                contadorDelta++;
                break;
            case "alfa":
                contadorAlfa++;
                break;
            case "beta":
                contadorBeta++;
                break;
            case "ninguna":
                contadorNinguna++;
                break;
        }

        if (nacionalidadIngresada == "argentina" && cepa == "delta") {
            contadorArgentinosD++;
        }
        contadorPersona++;
    }

    porcentajePositivo = (contadorPositivo * 100) / contadorPersona;
    porcentajeNegativo = (contadorNegativo * 100) / contadorPersona;

    document.write("Porcentaje de positivos %" + porcentajePositivo + "<br>");
    document.write("Porcentaje de negativos %" + porcentajeNegativo + "<br>");
    if (contadorAlfa > contadorBeta && contadorAlfa > contadorDelta && contadorAlfa > contadorNinguna) {
        mensaje = " Alfa";
    }
    if (contadorBeta > contadorAlfa && contadorBeta > contadorDelta && contadorBeta > contadorNinguna) {
        mensaje = " Beta";
    }
    if (contadorDelta > contadorBeta && contadorDelta > contadorAlfa && contadorDelta > contadorNinguna) {
        mensaje = " Delta";
    }
    if (contadorNinguna > contadorBeta && contadorNinguna > contadorAlfa && contadorNinguna > contadorDelta) {
        mensaje = " Ninguna";
    }
    document.write("La cepa mas encontrada es " + mensaje + "<br>");

    document.write("La edad del mayor extranjero positivo es " + edadMaximo + "<br>");

    document.write("La cantidad de personas argentinas contagiadas con la delta es " + contadorArgentinosD + "<br>");
}