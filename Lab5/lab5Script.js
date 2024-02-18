const ventasPropias = prompt('Ingresa la cantidad de malangas que tu vendes')
const ventasAjenas = prompt('Ingresa la cantidad de malangas que vende tu socio')
const ventasDeNegocio = prompt('Ingresa la cantidad de malangas que vende el negocio al que le distribuyes')

const ventasTotales = parseInt(ventasAjenas)+parseInt(ventasDeNegocio)+parseInt(ventasPropias);

const porcentajeDeVentasPropias = (ventasPropias*100)/ventasTotales;
const porcentajeDeVentasAjenas = (ventasAjenas*100)/ventasTotales;
const porcentajeDeVentasNegocio = (ventasDeNegocio*100)/ventasTotales;

document.write("<table class='responsive-table'>");
document.write("<thead><tr><th>Vendedor</th><th>Ventas Realizadas</th><th>Porcentaje que representa del negocio</th></tr></thead>");
document.write("<tbody>");


document.write("<tr>");
document.write("<td>" + 'ventasPropias' + "</td>");
document.write("<td>" + ventasPropias + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasPropias) + '%' + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + 'ventasDeSocios' + "</td>");
document.write("<td>" + ventasAjenas + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasAjenas) + '%' + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + 'ventasDeOtrosNegocios' + "</td>");
document.write("<td>" + ventasDeNegocio + "</td>");
document.write("<td>" + parseInt(porcentajeDeVentasNegocio) + '%' +"</td>");
document.write("</tr>");


// Finalizar la tabla
document.write("</tbody>");
document.write("</table>");
