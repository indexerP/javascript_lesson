// let pass = prompt('Enter password')

// let confirmpass = prompt('Enter password')

// if (pass == confirmpass){
// 	console.log('Добро пожаловать!');
// }
// else{
// 	console.log('Что-то пошло не так…');
// }


// Создайте алгоритм, который попросит пользователя ввести пароль.
// Если пользователь введет
// пароль 'qwerty', то вывести фразу: 'Добро пожаловать!', иначе 'Что-то пошло не так…'

// Создайте алгоритм по заданию пароля с подтверждением. После запуска программа должна попросить:
// 'Введите пароль'. После ввода 1-го пароля программа должна попросить: 'Введите пароль еще раз'. Если
// введенные пароли равны между собой, то программа должна вывести: 'Пароль задан', иначе: 'Пароли не
// совпадают'.

// Создать алгоритм, который запросит у пользователя температуру на улице. Если введенное значение
// окажется больше 15, то программа вернет значение 'Тепло'. Если введенное значение окажется ниже 5
// градусов, то ответить 'Холодно'. Для остальных значений вернуть значение 'Нормально'. Например,
// пользователь ввел значение 10. Ответ: 'Нормально'

// let gradus = prompt('Enter gradus')

// if (gradus > 15){
// 	console.log('Тепло');
// }else if(gradus < 5) {
// 	console.log('Холодно');
// }else {
// 	console.log('Нормально');
// }

// let age = prompt('Enter age')
// let ostalos = 18 - age;
// let color = document.querySelector("body");

// if (age > 18) {
// 	console.log('welcome');
// 	color.classList.add("wriper");
// } else {
// 	// let result = 'вам осталось ждать' + " " + ostalos + " " + "года"
// 	let result = `вам осталось ждать ${ostalos} года`
// 	console.log(result);
// 	color.classList.add("wriperSecond");
// }

// .className - удаляет существующай класс и заменяет на другой

let age = prompt('Enter age');
let color = document.querySelector("body");
let elementBg = (age > 18)? 'ok' : 'not';
color.classList.add(elementBg);
console.log(elementBg);