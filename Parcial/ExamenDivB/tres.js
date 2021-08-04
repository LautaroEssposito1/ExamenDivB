function mostrar() {
	let i = 0;
	let destinoVuelo;
	let cantidadVac;
	let costoVuelo;
	let mayorCantVac;
	let destinoMax;
	let primerdestino = false;
	let vueloMasUnidades;
	let promedio;
	let cantAcumUsa = 0;
	let contaUsa = 0;
	let cantAcumAsia = 0;
	let contaAsia = 0;
	let cantAcumEuropa = 0;
	let contaEuropa = 0;
	let acumTotal = 0;
	let descuento;



	for (let i = 0; i < 10; i++) {
		destinoVuelo = prompt("Ingrese el destino del vuelo");
		while (destinoVuelo != "asia" && destinoVuelo != "europa" && destinoVuelo != "usa") {
			destinoVuelo = prompt("Destino incorrecto. Ingrese uno valido");
		}
		cantidadVac = parseInt(cantidadVac);
		cantidadVac = prompt("Ingrese cuantas vacunas se reciben ");
		while (cantidadVac <= 0) {
			cantidadVac = prompt("Error. Ingrese una cantidad valida");
		}
		costoVuelo = parseInt(costoVuelo);
		costoVuelo = prompt("Ingrese el costo del vuelo (entre 1000000 y 5000000 ");
		while (costoVuelo < 1000000 && costoVuelo > 5000000) {
			costoVuelo = prompt("Ingrese un costo valido para el vuelo");
		}
		if (destinoVuelo > destinoMax || primerdestino == false) {
			destinoMax = destinoVuelo;
			primerdestino == true;
		}

		if (destinoVuelo == "asia") {
			contaAsia++;
			cantAcumAsia = cantAcumAsia + cantidadVac;
		}
		else {
			if (destinoVuelo == "usa") {
				contaUsa++;
				cantAcumUsa = cantAcumUsa + cantidadVac;
			}
			else {
				if (destinoVuelo == "europa") {
					contaEuropa++;
					cantAcumEuropa = cantAcumEuropa + cantidadVac;
				}
			}
			acumTotal = acumTotal + cantidadVac;
		}


	}
	promedio = acumTotal / cantAcumAsia;
	if (cantidadVac > 4000000) {
		descuento = (costoVuelo - (costoVuelo * 0.30))
		document.write("El precio a pagar con un descuento del %30 es un total de $ " + descuento + "<br>");
	}
	else {
		if (cantidadVac >= 2000000 && cantidadVac <= 4000000) {
			descuento = (costoVuelo - (costoVuelo * 0.20))
			document.write("El precio a pagar con un descuento del %20 es un total de $ " + descuento + "<br>");
		}
		document.write("El destino que mas vacunas trajo fue " + destinoMax + "<br>");
		document.write("Las vacunas traidas de asia fueron " + cantidadVac + "<br>");
		document.write("El precio a pagar sin descuento es de " + costoVuelo + "<br>");

	}


}
