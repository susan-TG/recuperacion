var cuotas = 19;
var pago = 10;

for (i = 0; i<=cuotas;i++) {
	pago = pago * 2
}

alert('El pago total fue de $'+pago);
alert('La cuota en meses era de $'+pago/(cuotas+1));