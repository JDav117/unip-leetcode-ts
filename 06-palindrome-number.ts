/**
 *  LeetCode #9 - Número Palíndromo
 *  https://leetcode.com/problems/palindrome-number/
 *   Dificultad: Fácil
 *  Tema: Matemáticas
 *
 * Dado un entero `x`, retorna true si es un palíndromo
 * (se lee igual de izquierda a derecha que de derecha a izquierda).
 *
 * Ejemplo:
 *   Entrada: 121   →  Salida: true
 *   Entrada: -121  →  Salida: false  (los negativos nunca son palíndromos)
 *   Entrada: 10    →  Salida: false
 *
 * Enfoque: invertir solo la mitad del número para evitar desbordamiento.
 *   Comparamos la primera mitad con la segunda mitad invertida.
 */

function isPalindrome(x: number): boolean {
  // Los negativos y los múltiplos de 10 (salvo el 0) no son palíndromos
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let invertido = 0;
  let restante = x;

  // Invertimos solo la segunda mitad del número
  while (restante > invertido) {
    invertido = invertido * 10 + (restante % 10);
    restante = Math.floor(restante / 10);
  }

  // Longitud par (ej. 1221) o impar (ej. 121 → comparamos 12 con 1)
  return restante === invertido || restante === Math.floor(invertido / 10);
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(0));     // true
console.log(isPalindrome(1221));  // true
