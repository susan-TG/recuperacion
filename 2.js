var numeros = [3,2,3,4,-1,-2,0,-4,1];
var i = 0;
var mayores = 0;
var menores = 0;

for (i=0;i<=numeros.length-1;i++) {
	if (numeros[i] >= 0) {
		mayores++;
	}
	else {
		menores++;
	}
}

alert('Tienes '+mayores+' numeros mayores');
alert('Tienes '+menores+' numeros menores');