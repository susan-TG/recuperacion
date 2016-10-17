var ahorro = [];
var cantidad = 0;
var i = 0;

do {
	ahorro[i] = prompt("Cuanto ahorraras este mes?")
	cantidad = cantidad + Number(ahorro[i]);
	i++;
	alert('Este mes llevas $'+cantidad);

} while(i<=11)

