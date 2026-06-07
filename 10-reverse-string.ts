/**
 *  LeetCode #344 - Invertir Cadena
 *  https://leetcode.com/problems/reverse-string/
 *   Dificultad: Fácil
 *  Tema: Dos Punteros, Cadenas de texto
 *
 * Invierte un arreglo de caracteres en su lugar (in-place).
 * Debe hacerse con O(1) de memoria extra.
 *
 * Ejemplo:
 *   Entrada:  ['h','e','l','l','o']
 *   Salida:   ['o','l','l','e','h']
 *
 * Enfoque: Dos punteros que avanzan hacia el centro intercambiando elementos.
 *   El puntero izquierdo empieza en 0, el derecho al final.
 *   Se intercambian y se acercan hasta cruzarse.
 */

function reverseString(s: string[]): void {
  let izquierda = 0;
  let derecha = s.length - 1;

  while (izquierda < derecha) {
    // Intercambio sin variable temporal usando desestructuración
    [s[izquierda], s[derecha]] = [s[derecha], s[izquierda]];
    izquierda++;
    derecha--;
  }
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
const a = ['h', 'e', 'l', 'l', 'o'];
reverseString(a);
console.log(a); // [ 'o', 'l', 'l', 'e', 'h' ]

const b = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(b);
console.log(b); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
