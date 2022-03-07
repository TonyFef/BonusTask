"use strict";

let dataStart = fetch("dbHeroes.json");
let ul;
let counter = 0;

const removeDescr = () => {
    let description = document.querySelector(".char__info");
    description.remove();
};

const charsShower = () => {
    let charsList = document.getElementsByClassName("char__item");
    // console.log(charsList.length);
    // if (charsList.length > 9) {
    //     charsList[9 - 50].style.display = 'none'
    // }
};

dataStart
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            ul = document.querySelector(".char__grid");
            // console.log(ul);

            counter++;
            let newCharacter = document.createElement("li");
            newCharacter.classList.add("char__item");
            // newCharacter.id =a${counter};
            newCharacter.innerHTML = `<img src="${item.photo}" alt="Personage" style="object-fit: unset" class='cropped'>
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
    })
    .then((data) => {
        let charsList = document.getElementsByClassName("char__item");

        for (let char of charsList) {
            char.addEventListener("click", (e) => {
                removeDescr();

                let parentForappend = document.querySelector(".char__list");

                let parent = e.target.closest(".char__item");
                let parentImgSrc = parent.querySelector("img").src;
                let parentName = parent.querySelector(".char__name").textContent;
                let parentRealName = parent.querySelector(".char__realName").textContent;
                let parentSpecies = parent.querySelector(".char__species").textContent;
                let parentGender = parent.querySelector(".char__gender").textContent;
                let parentCitizenship = parent.querySelector(".char__citizenship").textContent;
                let parentBirthDay = parent.querySelector(".char__birthDay").textContent;
                let parentDeathDay = parent.querySelector(".char__deathDay").textContent;
                let parentStatus = parent.querySelector(".char__status").textContent;
                let parentActors = parent.querySelector(".char__actors").textContent;
                let parentMovies = parent.querySelector(".char__movies").textContent.split(",").join("<br>");

                // let propsArr = [
                //     parentName,
                //     parentRealName,
                //     parentSpecies,
                //     parentCitizenship,
                //     parentBirthDay,
                //     parentDeathDay,
                //     parentStatus,
                //     parentActors,
                // ];
                // console.log(propsArr);

                // propsArr.forEach((prop) => {
                //     if (!prop) {
                //         prop = "---";
                //     }
                // });

                let newCharDescr = document.createElement("div");
                newCharDescr.classList.add("char__info");

                newCharDescr.innerHTML = `
                    <div class="char__basics">
                        <div class="descr-nowrap">
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
                                <div class="char__info-realName">${parentRealName}</div>
                                <div class="char__info-name">${parentSpecies}</div>
                                <div class="char__info-name">${parentGender}</div>
                                <div class="char__info-name">${parentCitizenship}</div>
                                <div class="char__info-name">${parentBirthDay}</div>
                                <div class="char__info-name">${parentDeathDay}</div>
                                <div class="char__info-name">${parentStatus}</div>
                                <div class="char__info-name">${parentActors}</div>    
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
            });
        }
    })
    .then(() => {
        charsShower();
    });
