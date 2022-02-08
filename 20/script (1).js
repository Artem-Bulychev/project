/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres


'use strict'; 
function showMyDB() {

}

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start(); 
/* if (numberOfFilms === []) {
    console.log('Error'); 
} else if (num < 50) {
    console.log('Много');
} else {
    console.log('Ok!');  */
/* } 

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [], 
    privat: false
};   */


/*  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
          
    personalMovieDB.movies[a] = b; */


/*  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман"); 
} else {
    console.log("Произошла ошибка"); 
}

console.log(personalMovieDB);   */

// Код возьмите из предыдущего домашнего задания



/* function first() {
    //Do something
    setTimeout(function() {
        console.log(1); 
    } , 500); 
}

function second () {
    console.log(2); 
}

first(); 
second(); 

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`); 
    callback(); 
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('Javascript', done);  */

// "use strict"

// const arr = [1, 2, 3, 6, 8]; 
// // arr[99] = 0; 
// // console.log(arr.length); 
// // console.log(arr); 
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`); 

    
// });
// arr.pop(); 
//arr.push(10); 
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]); 
// }

// for (let value of arr) {
//     console.log(value); 
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products); 

// const options = {
//     name: 'test', 
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test"); 
//     }
// } ;

// options.makeTest(); 

// const {border, bg} = options.colors; 
// console.log(border);
// console.log(Object.keys(options).length);
/* console.log(options["colors"]["border"]); */

/*delete options.name; 
console.log(options); */
//let counter = 0; 
//for (let key in options) {
   // if (typeof (options[key]) === 'object') {
    //    for (let i in options[key]) {
    //        console.log(`Свойства ${i} имеет значения ${options[key][i]}`);
            
   //     }
   // } else {
   //     console.log(`Свойства ${key} имеет значения ${options[key]}`);   
//         counter++;
//    }
// };

// console.log(counter); 


'use strict';

// To String

//  1)
console.log(typeof(String(null))); 
console.log(typeof(String(4))); 

// 2) 

console.log(typeof(5 + '')); 

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px'; 

// To Number

// 1) 

console.log(typeof(Number('4'))); 

// 2) 

console.log(typeof(+'5')); 

// 3) 
console.log(typeof(parseInt("15px", 10))); 

let answ = +prompt("Hello", ""); 

// To boolean 

// 0, '', null, undefined, NaN; 

let switcher = null; 

if (switcher) {
    console.log('Working...'); 
}

switcher = 1; 

if (switcher) {
    console.log('Working...'); 
}

//2)

console.log(typeof(Boolean('4'))); 

// 3)

console.log(typeof(!!"33333")); 



let x = 5; alert(x++); 