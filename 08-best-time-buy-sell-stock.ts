/**
 *  LeetCode #121 - Mejor Momento para Comprar y Vender Acciones
 *  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *   Dificultad: Fácil
 *  Tema: Arreglos, Programación Dinámica
 *
 * Dado un arreglo `precios` donde precios[i] es el precio de una acción
 * el día i, retorna la ganancia máxima posible con una sola compra y venta.
 * Retorna 0 si no es posible obtener ganancia.
 *
 * Ejemplo:
 *   Entrada: [7, 1, 5, 3, 6, 4]
 *   Salida:  5  →  comprar el día 2 (precio=1), vender el día 5 (precio=6)
 *
 * Enfoque: un solo recorrido rastreando el precio mínimo visto hasta ahora.
 *   En cada paso, la mejor ganancia = precio actual − precio mínimo acumulado.
 */

function maxProfit(precios: number[]): number {
  let precioMinimo = Infinity;
  let mejorGanancia = 0;

  for (const precio of precios) {
    if (precio < precioMinimo) {
      // Encontramos un punto de compra más barato
      precioMinimo = precio;
    } else {
      // ¿Vender hoy supera nuestra mejor ganancia registrada?
      mejorGanancia = Math.max(mejorGanancia, precio - precioMinimo);
    }
  }

  return mejorGanancia;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));     // 0  (siempre baja)
console.log(maxProfit([2, 4, 1]));             // 2
