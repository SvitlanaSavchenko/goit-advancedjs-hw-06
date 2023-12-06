/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Оголошення перерахування для днів тижня
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Функція для перевірки, чи це вихідний день
function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклад використання
const today: DayOfWeek = DayOfWeek.Saturday;
const isTodayWeekend: boolean = isWeekend(today);
console.log(isTodayWeekend); // Виведе true
