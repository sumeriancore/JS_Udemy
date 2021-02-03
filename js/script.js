'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0); 

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for(let i = 0; i < 2; i++){
    let movieName = prompt("Один из последних просмотренных фильмов?","");
    let movieRate = prompt("На сколько его оцените?", "");

    personalMovieDB.movies[movieName] = movieRate;
}

console.log(personalMovieDB.movies);