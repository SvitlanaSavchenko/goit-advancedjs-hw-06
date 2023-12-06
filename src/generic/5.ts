/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }

// export {};

// Використовуємо generics для визначення типів ключа та значення
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання інтерфейсу KeyValuePair з різними типами
const pair1: KeyValuePair<number, string> = { key: 1, value: "One" };
const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };

export {};
