/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
/* 
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// let a = 5, 
//     b = a; 

// b = b + 5; 

// console.log(b); 
// console.log(a); 

// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj;  // Ссылку 

// copy.a = 10;

// console.log(copy);
// console.log(obj); 

function copy (mainObj) {
    let objCopy = {}; 

    let key; 
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; 
    }

    return objCopy; 
}

const numbers = {
    a:2,
    b:5, 
    c: {
        x:7,
        y:4
    }
}; 

// const newNumbers = copy(numbers);

// newNumbers.a = 10; 
// newNumbers.c.x = 10; 

// console.log(newNumbers); 
// console.log(numbers); 

// const add = {
//     d:17,
//     e:20
// };

// const clone = Object.assign({}, add);  

// clone.d = 20; 

// // console.log(add); 
// // console.log(clone); 

// const oldArray = ['a', 'b', 'c']; 

// const newArray = oldArray.slice();

// newArray[1] = 'sfdsgfbfdh'

// console.log(newArray);
// console.log(oldArray); 

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'], 
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); 

function log(a, b, c) {
    console.log(a); 
    console.log(b);
    console.log(c);     

}

const num = [2, 5, 7]; 

log(...num); 

const array = ["a", "b"]; 

const newAarray = [...array]; 

const q = {
    one: 1, 
    two: 2
}; 

const newObj = {...q}; 

// const arr = [2, 13, 26, 8, 10]; 
// arr.sort(compareNum); 
// console.log(arr);

// function compareNum(a,  b) {
//     return a - b 
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); 
// console.log(products.join('; ')); 

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start(); 

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {}, 
//     actors: {},
//     genres: [], 
//     privat: false
// };

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);

//     }
// }

// showMyDB(personalMovieDB.privat); 


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
       
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
//     }
// }
// writeYourGenres(); 




//  for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
          
//     personalMovieDB.movies[a] = b;
// } 

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// }
// }
// rememberMyFilms();
//  if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман"); 
// } else {
//     console.log("Произошла ошибка"); 
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман"); 
//     } else {
//         console.log("Произошла ошибка"); 
//     }
// }
// detectPersonalLevel(); 

// console.log(personalMovieDB);  



/* 'use strict';

const str = "test"
//const arr = [1, 2, 4]; 

//console.log(str[2] = 'd');
//console.log(str.toUpperCase());
console.log(str.toLowerCase()); 
console.log(str); 

const fruit = "Some fruit"

console.log(fruit.indexOf("fruit")); 
const logg = "Hello World"; 

//console.log(logg.slice(6));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6,5));

const num = 12.2; 
console.log(Math.round(num)); 

const test = "12.2px"; 
//console.log(parseInt(test));
console.log(parseFloat(test)); */

/* 
let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!"); 
console.log(num);  */

/* function calc(a, b) {
    return (a + b); 
}

console.log(calc(4, 3)); 
console.log(calc(5, 6)); 
console.log(calc(10, 6));
 */
/* function ret() {
    let num = 50; 
    return num; 
}

const anotherNum = ret(); 
console.log(anotherNum); 

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => { return a + b };  */


/* const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
/* 
//if (numberOfFilms === []) {
    console.log('Error'); 
} else if (num < 50) {
    console.log('Много');
} else {
    console.log('Ok!'); 
} */

/* const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [], 
    privat: false
};  */


/* for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
          
    personalMovieDB.movies[a] = b;
} */

//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман"); 
// } else {
//     console.log("Произошла ошибка"); 
// }

// console.log(personalMovieDB); 