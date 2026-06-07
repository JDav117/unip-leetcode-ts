/**
 *  LeetCode #217 - Contiene Duplicados
 *  https://leetcode.com/problems/contains-duplicate/
 *   Dificultad: Fácil
 *  Tema: Arreglos, Tabla Hash
 *
 * Dado un arreglo de enteros `nums`, retorna true si algún valor
 * aparece al menos dos veces en el arreglo.
 *
 * Ejemplo:
 *   Entrada: [1, 2, 3, 1]  →  Salida: true
 *   Entrada: [1, 2, 3, 4]  →  Salida: false
 *
 * Enfoque: Conjunto (HashSet) — O(n) tiempo, O(n) espacio.
 *   Registramos cada elemento visto. Si lo encontramos de nuevo, es duplicado.
 */

function containsDuplicate(nums: number[]): boolean {
  const vistos = new Set<number>();

  for (const num of nums) {
    if (vistos.has(num)) return true; // Ya lo habíamos visto → duplicado
    vistos.add(num);
  }

  return false;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(containsDuplicate([1, 2, 3, 1]));                     // true
console.log(containsDuplicate([1, 2, 3, 4]));                      // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
