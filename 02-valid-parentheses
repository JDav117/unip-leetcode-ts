**
 *  LeetCode #20 - Paréntesis Válidos
 *  https://leetcode.com/problems/valid-parentheses/
 *  Dificultad: Fácil
 *  Tema: Pila, Cadenas de texto
 *
 * Dada una cadena con los caracteres '(', ')', '{', '}', '[', ']',
 * determina si la cadena es válida (correctamente abierta y cerrada).
 *
 * Ejemplo:
 *   Entrada: "()[]{}"  →  Salida: true
 *   Entrada: "(]"      →  Salida: false
 */

function isValid(s: string): boolean {
  const pila: string[] = [];

  // Relaciona cada símbolo de cierre con su apertura correspondiente
  const parEsperado: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const caracter of s) {
    if ('({['.includes(caracter)) {
      // Símbolo de apertura → apilamos
      pila.push(caracter);
    } else {
      // Símbolo de cierre → debe coincidir con el tope de la pila
      if (pila.pop() !== parEsperado[caracter]) {
        return false;
      }
    }
  }

  // Válido solo si todos los símbolos fueron emparejados (pila vacía)
  return pila.length === 0;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(isValid('()'));       // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]'));       // false
console.log(isValid('([)]'));     // false
console.log(isValid('{[]}'));     // true
