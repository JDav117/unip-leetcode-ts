/**
 *  LeetCode #136 - Número Único
 *  https://leetcode.com/problems/single-number/
 *   Dificultad: Fácil
 *  Tema: Arreglos, Manipulación de Bits
 *
 * Dado un arreglo donde cada elemento aparece dos veces excepto uno,
 * encuentra ese elemento único. Debe ejecutarse en O(n) y O(1) espacio.
 *
 * Ejemplo:
 *   Entrada: [4, 1, 2, 1, 2]
 *   Salida:  4
 *
 * Truco XOR:
 *   - Un número XOR consigo mismo da 0:  a ^ a = 0
 *   - Un número XOR con 0 se mantiene:   a ^ 0 = a
 *   - XOR es conmutativo y asociativo
 *   → Todos los pares se cancelan, queda solo el elemento único.
 */

function singleNumber(nums: number[]): number {
  // Acumular XOR de todos los elementos
  return nums.reduce((xor, num) => xor ^ num, 0);
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1]));               // 1
