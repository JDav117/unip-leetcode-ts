/**
 * 📌 LeetCode #53 - Subarreglo de Suma Máxima
 * 🔗 https://leetcode.com/problems/maximum-subarray/
 * 🏷️  Dificultad: Medio
 * 📂 Tema: Arreglos, Programación Dinámica
 *
 * Dado un arreglo de enteros `nums`, encuentra el subarreglo
 * con la mayor suma posible y retorna dicha suma.
 *
 * Ejemplo:
 *   Entrada: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 *   Salida:  6  →  el subarreglo [4, -1, 2, 1] tiene la suma más alta
 *
 * Algoritmo de Kadane — O(n) tiempo, O(1) espacio:
 *   En cada posición decidimos si extender el subarreglo actual
 *   o comenzar uno nuevo desde el elemento actual.
 */

function maxSubArray(nums: number[]): number {
  let sumaMaxima = nums[0];
  let sumaActual = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // ¿Conviene extender el subarreglo o empezar desde aquí?
    sumaActual = Math.max(nums[i], sumaActual + nums[i]);
    sumaMaxima = Math.max(sumaMaxima, sumaActual);
  }

  return sumaMaxima;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1]));                               // 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // 23
console.log(maxSubArray([-1, -2, -3]));                      // -1
