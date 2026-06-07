/**
 *  LeetCode #70 - Escalando Escaleras
 *  https://leetcode.com/problems/climbing-stairs/
 *   Dificultad: Fácil
 *  Tema: Programación Dinámica, Matemáticas
 *
 * Estás subiendo una escalera de `n` peldaños. Cada vez puedes subir
 * 1 o 2 peldaños. Retorna el número de formas distintas de llegar arriba.
 *
 * Ejemplo:
 *   Entrada: n = 3
 *   Salida:  3  →  (1+1+1), (1+2), (2+1)
 *
 * Observación: sigue la secuencia de Fibonacci.
 *   formas(n) = formas(n-1) + formas(n-2)
 *   Usamos dos variables en lugar de un arreglo → O(1) espacio.
 */

function climbStairs(n: number): number {
  if (n <= 2) return n;

  let anterior2 = 1; // formas de llegar al peldaño 1
  let anterior1 = 2; // formas de llegar al peldaño 2

  for (let i = 3; i <= n; i++) {
    const actual = anterior1 + anterior2;
    anterior2 = anterior1;
    anterior1 = actual;
  }

  return anterior1;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(climbStairs(1));  // 1
console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
console.log(climbStairs(5));  // 8
console.log(climbStairs(10)); // 89
