"use strict";

let dataStart = fetch("dbHeroes.json");

let charsList = document.getElementsByClassName("char__item");
let select;
let chars;

let ul;
let counter = 0;
let counter2 = 1;
let arr = [];

const loadButtonHider = () => {
    const moreButton = document.getElementById("more");
    moreButton.style.display = "none";
};

const removeDescr = () => {
    let description = document.querySelector(".char__info");
    description.remove();
};

const charsShower = () => {
    charsList = document.getElementsByClassName("char__item");

    counter2++;
    for (let item of charsList) {
        if (item.classList.contains(`show${counter2}`)) {
            item.classList.add("show");
            if (counter2 == 9) {
                loadButtonHider();
            }
        }
    }
};

const deleteDescr = () => {
    const closeBtn = document.querySelector(".popup-close");

    closeBtn.addEventListener("click", () => {
        let description = document.querySelector(".char__info");
        description.innerHTML = `
        <div class="char__info">
            <div className="char__basics">
                <img src="loading.gif" alt="{name}" />
                <div>Description will be right here!</div>
                <div>Try it - by click on character's card!</div>
            </div>
        </div>`;
    });
    
};

const elemsCreator = (data) => {
    data.forEach((item) => {
        ul = document.querySelector(".char__grid");
        counter++;

        let newCharacter = document.createElement("li");
        newCharacter.classList.add("char__item");

        if (counter < 7) {
            newCharacter.classList.add("char__item", "show1");
        } else if (counter >= 7 && counter < 13) {
            newCharacter.classList.add("char__item", "show2");
        } else if (counter >= 13 && counter < 19) {
            newCharacter.classList.add("char__item", "show3");
        } else if (counter >= 19 && counter < 25) {
            newCharacter.classList.add("char__item", "show4");
        } else if (counter >= 25 && counter < 31) {
            newCharacter.classList.add("char__item", "show5");
        } else if (counter >= 31 && counter < 37) {
            newCharacter.classList.add("char__item", "show6");
        } else if (counter >= 37 && counter < 43) {
            newCharacter.classList.add("char__item", "show7");
        } else if (counter >= 43 && counter < 49) {
            newCharacter.classList.add("char__item", "show8");
        } else if (counter >= 49) {
            newCharacter.classList.add("char__item", "show9");
        }

        if (typeof item.movies != "undefined") {
            arr.push(...item.movies);
        }

        newCharacter.innerHTML = `<img src="${item.photo}" alt="Personage" class='cropped'>
        <div class="char__name">${item.name}</div>
        <span class="char__realName">${item.realName}</span>
        <span class="char__species">${item.species}</span>
        <span class="char__gender">${item.gender}</span>
        <span class="char__citizenship">${item.citizenship}</span>
        <span class="char__birthDay">${item.birthDay}</span>
        <span class="char__deathDay">${item.deathDay}</span>
        <span class="char__status">${item.status}</span>
        <span class="char__actors">${item.actors}</span>
        <span class="char__movies">${item.movies}</span>
        `;
        ul.append(newCharacter);
    });
    // console.log(arr);
};

const elemInfoShower = () => {
    let charsList = document.getElementsByClassName("char__item");

    for (let char of charsList) {
        char.addEventListener("click", (e) => {
            removeDescr();

            const parentForappend = document.querySelector(".char__list");

            const parent = e.target.closest(".char__item");
            const parentImgSrc = parent.querySelector("img").src;
            const parentName = parent.querySelector(".char__name").textContent;
            const parentRealName = parent.querySelector(".char__realName").textContent;
            const parentSpecies = parent.querySelector(".char__species").textContent;
            const parentGender = parent.querySelector(".char__gender").textContent;
            const parentCitizenship = parent.querySelector(".char__citizenship").textContent;
            const parentBirthDay = parent.querySelector(".char__birthDay").textContent;
            const parentDeathDay = parent.querySelector(".char__deathDay").textContent;
            const parentStatus = parent.querySelector(".char__status").textContent;
            const parentActors = parent.querySelector(".char__actors").textContent;
            const parentMovies = parent.querySelector(".char__movies").textContent.split(",").join("<br>");

            const newCharDescr = document.createElement("div");
            newCharDescr.classList.add("char__info");

            newCharDescr.innerHTML = `
                <div class="char__basics">
                    <div class="descr-nowrap">
                    <button class="popup-close">&times;</button>
                        <div class="first-descr">
                            <img src="${parentImgSrc}" alt="{name}" class='croppedForInfo'/>
                            <div class="first-descr-name">${parentName}</div>
                        </div>    
                        <div class="center-descr">
                            <div class="center-descr__text">Real name: </div>
                            <div class="center-descr__text">Species: </div>
                            <div class="center-descr__text">Gender: </div>
                            <div class="center-descr__text">Citizenship: </div>
                            <div class="center-descr__text">BirthDay: </div>
                            <div class="center-descr__text">DeathDay: </div>
                            <div class="center-descr__text">Status: </div>
                            <div class="center-descr__text">Actors: </div>    
                        </div>
                        <div class="left-descr">
                            <div class="char__info-realName char__info-heigth">${parentRealName}</div>
                            <div class="char__info-name char__info-heigth">${parentSpecies}</div>
                            <div class="char__info-name char__info-heigth">${parentGender}</div>
                            <div class="char__info-name char__info-heigth">${parentCitizenship}</div>
                            <div class="char__info-name char__info-heigth">${parentBirthDay}</div>
                            <div class="char__info-name char__info-heigth">${parentDeathDay}</div>
                            <div class="char__info-name char__info-heigth">${parentStatus}</div>
                            <div class="char__info-name char__info-heigth">${parentActors}</div>    
                        </div>
                    </div>
                <div class="movies-list">
                <ul className="char__movies-list">
                    <li className="char__movies-item">
                        <span>Movies: </span>
                        <div>${parentMovies}</div>
                    </li>
                </ul>
                </div>
            </div>`;
            parentForappend.append(newCharDescr);

            deleteDescr();
        });
    }
};

const filterHuman = () => {
    chars = document.querySelectorAll(".char__species");

    chars.forEach((char) => {
        let parentLI = char.closest("li");
        if (char.innerHTML != "human") {
            parentLI.style.display = "none";
        } else {
            parentLI.style.display = "block";
        }
    });
    loadButtonHider();
};

const filterAmerican = () => {
    chars = document.querySelectorAll(".char__citizenship");

    chars.forEach((char) => {
        let parentLI = char.closest("li");
        if (char.innerHTML != "American") {
            parentLI.style.display = "none";
        } else {
            parentLI.style.display = "block";
        }
    });
    loadButtonHider();
};
const filterFemale = () => {
    chars = document.querySelectorAll(".char__gender");

    chars.forEach((char) => {
        let parentLI = char.closest("li");
        if (char.innerHTML != "female") {
            parentLI.style.display = "none";
        } else {
            parentLI.style.display = "block";
        }
    });
    loadButtonHider();
};

dataStart
    .then((response) => response.json())
    .then((data) => {
        elemsCreator(data);
    })
    .then(() => {
        elemInfoShower();
    })
    .then(() => {
        const moreButton = document.getElementById("more");
        moreButton.addEventListener("click", charsShower);
    })
    .then(() => {
        select = document.querySelector(".select-css");
        select.addEventListener("change", () => {
            if (select.selectedIndex == 1) {
                filterHuman();
            } else if (select.selectedIndex == 2) {
                filterAmerican();
            } else if (select.selectedIndex == 3) {
                filterFemale();
            }
        });
    })
    .then(() => {
        // let charsMovies = document.get;
        // deleteDescr();
    })
    .catch((error) => {
        console.error(error.message);
    });
