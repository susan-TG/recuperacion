
var estatura = [];
var promedio = 0;
var i = 0; 

do {
	estatura[i]=prompt("¿Cuál es tu estatura?");
	i++;
} while(estatura[i-1]!=null)

for (i=0;i<estatura.length-1;i++) {
	estatura[i] = Number(estatura[i]);
	promedio = promedio + estatura[i];
}

alert('el promedio es de ' + promedio/(estatura.length-1));