"use strict";

let dataStart = fetch("dbHeroes.json");

dataStart
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })