function calcularDescuento() {
  let montoCompra = parseFloat(document.getElementById("montoCompra").value);

  // Manejar casos de entrada inválida
  if (isNaN(montoCompra) || montoCompra < 0) {
    alert("Por favor, ingrese un monto válido.");
    return;
  }

  let totalSinDescuento = montoCompra;
  let descuentoAplicado = 0;
  let totalAPagar = montoCompra;

  if (montoCompra > 1000) {
    descuentoAplicado = montoCompra * 0.1;
    totalAPagar = montoCompra - descuentoAplicado;
  }

  document.getElementById("totalSinDescuento").innerHTML = "Total sin descuento: S/" + totalSinDescuento.toFixed(2);
  document.getElementById("descuentoAplicado").innerHTML = "Descuento aplicado: S/" + descuentoAplicado.toFixed(2);
  document.getElementById("totalAPagar").innerHTML = "Total a pagar: S/" + totalAPagar.toFixed(2);
}