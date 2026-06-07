/**
 *  LeetCode #1 - Two Sum
 *  https://leetcode.com/problems/two-sum/
 *  Dificultad: Fácil
 *  Tema: Arreglos, Tabla Hash
 *
 * Dado un arreglo de enteros `nums` y un entero `target`,
 * retorna los índices de los dos números que suman `target`.
 *
 * Ejemplo:
 *   Entrada: nums = [2, 7, 11, 15], target = 9
 *   Salida:  [0, 1]  →  porque nums[0] + nums[1] = 2 + 7 = 9
 */

function twoSum(nums: number[], target: number): number[] {
  // El mapa guarda { valor → índice } para búsquedas en O(1)
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    // Si el complemento ya fue visto, encontramos el par
    if (seen.has(complemento)) {
      return [seen.get(complemento)!, i];
    }

    seen.set(nums[i], i);
  }

  // El problema garantiza que siempre existe una solución
  return [];
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6));      // [ 1, 2 ]
console.log(twoSum([3, 3], 6));          // [ 0, 1 ]
