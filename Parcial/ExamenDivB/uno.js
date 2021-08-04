
function mostrar() {
	let seguir = true;
	let edadIngresada;
	let nombreIngresado;
	let tipoVacuna;
	let sexoIngresado;
	let contadorEdad = 0;
	let promedioEdad;
	let acumuladorVacRusa;
	let contVacRusa;
	let acumEdadIngresada;
	let dosis;




	while (seguir == true) {
		nombreIngresado = prompt("Ingrese su nombre").toLocaleLowerCase;
		while (nombreIngresado.length < 3 || nombreIngresado.length > 10) {
			nombreIngresado = prompt("Error. Ingrese un nombre valido");
		}
		edadIngresada = prompt("Ingrese su edad (Debe ser mayor o igual de 12 años)");
		edadIngresada = parseInt(edadIngresada);
		while (edadIngresada < 12) {
			edadIngresada = prompt("Edad incorrecta. Ingrese una valida");
		}
		tipoVacuna = prompt("Ingrese su vacuna ");
		while (isNaN(tipoVacuna) == false || tipoVacuna != "rusa" && tipoVacuna != "china" && tipoVacuna != "americana") {
			tipoVacuna = prompt("Error, ingrese una vacuna correcta.");
		}
		sexoIngresado = prompt("Ingrese su sexo");
		while (sexoIngresado != "f" && sexoIngresado != "m") {
			sexoIngresado = prompt("Error, ingrese su sexo nuevamente. ()");
		}
		dosis = prompt("Ingrese si su dosis es la primera o segunda (p/s)")
		while (dosis = ! "s" && dosis != "p") {
			dosis = prompt("Error. Ingrese una dosis valida");
		}
		seguir = confirm("Desea añadir mas personas?");
	}


}
/*
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada*/