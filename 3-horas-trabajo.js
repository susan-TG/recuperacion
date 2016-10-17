var horas = [2, 2, 1, 1, 2, 2]
var sueldo = prompt("Cual es el sueldo a pagar?")
sueldo = Number(sueldo);
var suma = 0;

for(i=0; i<=5; i++) {
	suma = horas[i] + suma;
}

sueldo = sueldo * suma;

alert('Tienes que pagar $'+sueldo);