"use strict";

let numberOfFilms;

function start() {
    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms === " " || numberOfFilms === null || isNaN(numberOfFilms)) {
        const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

<<<<<<< HEAD
// start();
=======
start();
>>>>>>> newbranch

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?",""),
              b = prompt("На сколько оцените его","");
    
        if (a != null && b != null  && a != "" && b != "" && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    
    }
}

<<<<<<< HEAD
// rememberMyFilms();
=======
rememberMyFilms();
>>>>>>> newbranch

function detectPersonaLevel() {
    if (personaMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personaMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

<<<<<<< HEAD
// detectPersonaLevel();
=======
detectPersonaLevel();
>>>>>>> newbranch

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    } 
    
}

showMyDB(personaMovieDB.privat);

function writeYourGenres() {
    for ( let i = 1; i < 4; i++) {
        personaMovieDB.genres[i - 1] = prompt(`Ваш любий жанр под номером ${i}?`); 
    }
}
writeYourGenres();

console.log(personaMovieDB.genres);
