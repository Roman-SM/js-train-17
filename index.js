// Завдання 1
/**
 * Функція `replaceText` замінює всі входження певного слова у тексті на задану фразу.
 *
 *  word - Слово для заміни.
 *  replacement - Фраза, якою треба замінити слово.
 *  text - Текст, у якому треба здійснити заміну.
 */
function replaceText(word, replacement, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'g' (глобальний пошук).
  // Використання методу `replace` регулярного виразу для заміни слова на фразу у тексті.
  // Повернення заміненого тексту.
  return text.replaceAll(word, replacement)
}

// Перевірка
console.log("Завдання 1 ==============================");
console.log(
  replaceText(
    "example",
    "sample text",
    "This is an example sentence. Another example is here."
  )
);
// Виведе This is an sample text sentence. Another sample text is here.

// Завдання 2

/**
 * Функція `checkWord` перевіряє, чи міститься певне слово у тексті.
 *
 *  word - Слово для перевірки.
 *  text - Текст, який треба перевірити.
 */
function checkWord(word, text) {
  // Створення регулярного виразу для пошуку слова з флагом 'i' (регістронезалежний пошук).
  const globalRegex = new RegExp(word, 'g')
  // Використання методу `test` регулярного виразу для перевірки наявності слова у тексті.
  const result = globalRegex.test(text)
  // Повернення результату перевірки.
  return result
}

// Перевірка
console.log("Завдання 2 ==============================");
console.log(checkWord("example", "This is an example sentence."));
// Виведе true

// Завдання 3

/**
 * Функція `extractTextInParentheses` вилучає текст, який знаходиться в круглих дужках, з рядка.
 *
 *  str - Рядок, з якого треба вилучити текст.
 */
function extractTextInParentheses(str) {
  // Створення регулярного виразу з використанням зворотніх посилань для пошуку тексту в круглих дужках /\((.*?)\)/g.
  const globalRegex = /\((.*?)\)/g
  // Використання методу `matchAll` для отримання всіх збігів регулярного виразу.
  const arr = Array.from(str.matchAll(globalRegex))
  // Створення масиву зі знайденими текстами.
  const result = arr.map(arr => arr[1])
  // Повернення масиву вилучених текстів.
  return result
}

// Перевірка
console.log("Завдання 3 ==============================");

console.log(extractTextInParentheses("I have some (text) in (parentheses)."));
// Виведе [ 'text', 'parentheses' ]

// Завдання 4

/**
 * Функція `countEmails` знаходить та підраховує кількість email-адрес у рядку.
 *
 *  str - Рядок, в якому потрібно знайти email-адреси.
 */
function countEmails(str) {
  // Створення регулярного виразу для пошуку email-адрес /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.
  const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
  // Використання методу `match` для отримання всіх збігів регулярного виразу.
  const search = str.match(regex)
  // Підрахунок кількості email-адрес.
  let result = search ? search.length : 0
  // Повернення кількості email-адрес.
  return result
}

// Перевірка
console.log("Завдання 4 ==============================");

console.log(
  countEmails("Emails: john@example.com, kate@example.com, mike@example.com")
);
// Виведе  3

// Завдання 5
/**
 * Функція `findWordOccurrences` знаходить всі входження заданого слова у рядок з урахуванням ігнорування регістру.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 *  Повертає масив з індексами всіх входжень слова у рядок.
 */
function findWordOccurrences(str, word) {
  // Створення регулярного виразу для пошуку слова з флагами 'g та 'i',
  const regex = new RegExp(word, 'gi')
  // Створюємо пустий масив matches, та змінну match без значення
  const matches = []
  let match
  // За допомогою циклу whild створюємо ітерацію поки рядок містить збіги з регулярним виразом, та змінній match присвоюємо збіги
  while ((match = regex.exec(str)) !== null) {
    // Додавання індексу поточного входження слова у масив.
    matches.push(match.index)
    // Оновлення lastIndex,присвоєюмо йому значення  match.index + 1, щоб продовжити пошук з наступного символу
    regex.lastIndex = match.index + 1
  }
  // Повертаємо масив
  return matches
}

// Перевірка

console.log("Завдання 5 ==============================");

console.log(
  findWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The Fox is quick.",
    "fox"
  )
);
// Виведе  [ 16, 49 ]

// Завдання 6

/**
 * Функція `checkRegexFlags` перевіряє регулярний вираз на наявність флагів 'g' та 'm'.
 *
 *  regex - Регулярний вираз, який потрібно перевірити.
 * Повертає  - true, якщо флаги 'g' та 'm' присутні, інакше - false.
 */
function checkRegexFlags(regex) {
  // Отримуємо всі флаги регулярного виразу.
  const regexFlags = regex.flags
  // Перевіряємо наявність флагів 'g' та 'm' за допомогою методу `includes`.
  const Flags = regexFlags.includes('g', 'm')
  // Повертаємо  - true, якщо флаги 'g' та 'm' присутні, інакше - false
  return Flags
}

// Перевірка

console.log("Завдання 6 ==============================");

console.log(checkRegexFlags(/pattern/gm));
// Виведе true

// Завдання 7

/**
 * Функція `replaceWordOccurrences` замінює всі входження заданого слова у рядку на нове слово.
 *
 *  str - Рядок, в якому потрібно замінити входження слова.
 *  word - Слово, яке потрібно замінити.
 *  newWord - Нове слово, яким потрібно замінити.
 * Повертає  - Результат заміни входжень слова у рядку.
 */
function replaceWordOccurrences(str, word, newWord) {
  // Створюємо регулярний вираз зі словом, використовуючи флаг 'g' для глобального пошуку всіх входжень.
  const newRegex = new RegExp(`${word}`, 'g')
  // Заміняємо всі входження слова у рядку на нове слово.
  const result = str.replace(newRegex, newWord)
  // Повертаємо результат
  return result
}

// Перевірка
console.log("Завдання 7 ==============================");

console.log(
  replaceWordOccurrences(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "fox",
    "cat"
  )
);
// Виведе The quick brown cat jumps over the lazy dog. The cat is quick.

// Завдання 8

/**
 * Функція `checkFlags` перевіряє, які флаги використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив флагів, які використовуються у регулярному виразі.
 */
function checkFlags(regex) {
  // Створюємо масив для зберігання використаних флагів.
  const arrFlags = []
  // Перевіряємо, чи використовується флаг 'i' (ignoreCase) у регулярному виразі.
  const Flags = regex.flags
  if (Flags.includes('i')) {
    // Додаємо флаг ignoreCase до масиву, якщо він використовується.
    arrFlags.push('ignoreCase')
    // Отримуємо вихідний код регулярного виразу за допомогою властивості `source`.
    let source = regex.source
    // Додаємо вихідний код до масиву
    arrFlags.push(source)
  }
  // Повертаємо масив використаних флагів.
  return arrFlags
}

// Приклад використання:
console.log("Завдання 8 ==============================");

console.log(checkFlags(/pattern/gimsy));
// Виведе[ 'ignoreCase', 'pattern' ]

// Завдання 9

/**
 * Функція `checkRegexMethods` перевіряє, які методи використовуються в заданому регулярному виразі.
 *
 *  regex - Регулярний вираз для перевірки.
 * Повертає  - Масив методів, які використовуються у регулярному виразі.
 */
function checkRegexMethods(regex) {
  // Створюємо масив для зберігання використаних методів.
  const arr = []
  // Перевіряємо, чи використовується метод `dotAll`.
  if (regex.flags.includes('s')) {
    arr.push('dotAll') 
  }
  // Перевіряємо, чи використовується метод `multiline`.
  if (regex.flags.includes('m')) {
    arr.push('multiline') 
  }
  // Перевіряємо, чи використовується метод `sticky`.
  if (regex.flags.includes('y')) {
    arr.push('sticky') 
  }
  // Повертаємо масив використаних методів.
  return arr
}

// Приклад використання:
console.log("Завдання 9 ==============================");

console.log(checkRegexMethods(/test/msy));
// Виведе [ 'dotAll', 'multiline', 'sticky' ]

// Завдання 10

/**
 * Функція `findWord` знаходить перше входження заданого слова у рядок за допомогою методу `search`.
 *
 *  str - Рядок, в якому потрібно знайти входження слова.
 *  word - Слово, входження якого потрібно знайти.
 * Повертає  - Індекс першого входження слова у рядок або -1, якщо слово не знайдено.
 */
function findWord(str, word) {
  // Створення регулярного виразу для пошуку слова.
  const regex = new RegExp(`${word}`, 'g')
  // Використання методу `search` для пошуку першого входження слова.
  const result = str.search(regex)
  return result
}

// Приклад використання:
console.log("Завдання 10 ==============================");

console.log(
  findWord(
    "The quick brown fox jumps over the lazy dog. The fox is quick.",
    "quick"
  )
); // Виведе: 4
