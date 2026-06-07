/**
 *  LeetCode #21 - Unir Dos Listas Ordenadas
 *  https://leetcode.com/problems/merge-two-sorted-lists/
 *   Dificultad: Fácil
 *  Tema: Lista Enlazada, Recursión
 *
 * Une dos listas enlazadas ordenadas y retorna la lista resultante (ordenada).
 *
 * Ejemplo:
 *   Entrada: 1→2→4  y  1→3→4
 *   Salida:  1→1→2→3→4→4
 *
 * Enfoque iterativo con nodo centinela (dummy head).
 *   El nodo dummy simplifica el manejo del primer nodo de la lista.
 *   Avanzamos por ambas listas eligiendo siempre el valor menor.
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(
  lista1: ListNode | null,
  lista2: ListNode | null
): ListNode | null {
  // Nodo auxiliar para no tener que tratar el primer nodo como caso especial
  const centinela = new ListNode(-1);
  let actual = centinela;

  while (lista1 !== null && lista2 !== null) {
    if (lista1.val <= lista2.val) {
      actual.next = lista1;
      lista1 = lista1.next;
    } else {
      actual.next = lista2;
      lista2 = lista2.next;
    }
    actual = actual.next;
  }

  // Conectamos los nodos restantes (máximo una lista tiene elementos aún)
  actual.next = lista1 ?? lista2;

  return centinela.next;
}

// ─── Utilidades para las pruebas ──────────────────────────────────────────────
function desdeArreglo(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const cabeza = new ListNode(arr[0]);
  let actual = cabeza;
  for (let i = 1; i < arr.length; i++) {
    actual.next = new ListNode(arr[i]);
    actual = actual.next;
  }
  return cabeza;
}

function haciaArreglo(nodo: ListNode | null): number[] {
  const resultado: number[] = [];
  while (nodo) {
    resultado.push(nodo.val);
    nodo = nodo.next;
  }
  return resultado;
}

// ─── Pruebas manuales ─────────────────────────────────────────────────────────
console.log(haciaArreglo(mergeTwoLists(desdeArreglo([1, 2, 4]), desdeArreglo([1, 3, 4])))); // [1,1,2,3,4,4]
console.log(haciaArreglo(mergeTwoLists(desdeArreglo([]), desdeArreglo([]))));               // []
console.log(haciaArreglo(mergeTwoLists(desdeArreglo([]), desdeArreglo([0]))));              // [0]
