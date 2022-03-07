"use strict";

let dataStart = fetch("dbHeroes.json");
let ul;
let counter = 0;

const removeDescr = () => {
    let description = document.querySelector(".char__info");
    description.remove();
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
        // console.log(charsList);

        for (let char of charsList) {
            char.addEventListener("click", (e) => {
                removeDescr();

                let parentForappend = document.querySelector(".char__list");

                let parent = e.target.closest(".char__item");
                let parentImgSrc = parent.querySelector('img').src 
                // console.log(parentImg);
                let parentName = parent.querySelector(".char__name").textContent;
                let parentRealName = parent.querySelector(".char__realName").textContent;
                let parentSpecies = parent.querySelector(".char__species").textContent;
                let parentGender = parent.querySelector(".char__gender").textContent;
                let parentCitizenship = parent.querySelector(".char__citizenship").textContent;
                let parentBirthDay = parent.querySelector(".char__birthDay").textContent;
                let parentDeathDay = parent.querySelector(".char__deathDay").textContent;
                let parentStatus = parent.querySelector(".char__status").textContent;
                let parentActors = parent.querySelector(".char__actors").textContent;
                let parentMovies = parent.querySelector(".char__movies").textContent;

                let newCharDescr = document.createElement("div");
                newCharDescr.classList.add("char__info");

                newCharDescr.innerHTML = `
                    <div className="char__basics">
                    <img src="${parentImgSrc}" alt="{name}" class='croppedForInfo'/>
                        <div>
                            <div className="char__info-name">${parentName}</div>
                            <div className="char__info-realName">${parentRealName}</div>
                            <div className="char__info-name">${parentSpecies}</div>
                            <div className="char__info-name">${parentGender}</div>
                            <div className="char__info-name">${parentCitizenship}</div>
                            <div className="char__info-name">${parentBirthDay}</div>
                            <div className="char__info-name">${parentDeathDay}</div>
                            <div className="char__info-name">${parentStatus}</div>
                            <div className="char__info-name">${parentActors}</div>
                            
                            
                        </div>
                    </div>
                    <div className="char__comics">Comics:</div>
                    <ul className="char__comics-list">
                        <li key="{i}" className="char__comics-item">{item.name}</li>
                    </ul>`;
                parentForappend.append(newCharDescr);
            });
        }
    });
