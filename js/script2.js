"use strict";

let dataStart = fetch("dbHeroes.json");
let counter = 0;
let counter2 = 1;
let ul;
let charsList = document.getElementsByClassName("char__item");

const charsShower = () => {
    counter2++;
    for (let item of charsList) {
        if (item.classList.contains(`show${counter2}`)) {
            item.classList.add("show");
        }
    }
};

const onFilter = () => {
    console.log("hello");
};

class Card {
    constructor(
        name = "---",
        realName = "---",
        species = "---",
        citizenship = "---",
        gender = "---",
        birthDay = "---",
        deathDay = "---",
        status = "---",
        actors = "---",
        photo = "---",
        movies = "---",
        id
    ) {
        this.name = name;
        this.realName = realName;
        this.species = species;
        this.citizenship = citizenship;
        this.gender = gender;
        this.birthDay = birthDay;
        this.deathDay = deathDay;
        this.status = status;
        this.actors = actors;
        this.movies = movies;
        this.photo = photo;
        this.id = id;
    }

    showCard() {
        let newCharacter = document.createElement("li");

        if (this.id < 7) {
            newCharacter.classList.add("char__item", "show1");
        } else if (this.id >= 7 && this.id < 13) {
            newCharacter.classList.add("char__item", "show2");
        } else if (this.id >= 13 && this.id < 19) {
            newCharacter.classList.add("char__item", "show3");
        } else if (this.id >= 19 && this.id < 25) {
            newCharacter.classList.add("char__item", "show4");
        } else if (this.id >= 25 && this.id < 31) {
            newCharacter.classList.add("char__item", "show5");
        } else if (this.id >= 31 && this.id < 37) {
            newCharacter.classList.add("char__item", "show6");
        } else if (this.id >= 37 && this.id < 43) {
            newCharacter.classList.add("char__item", "show7");
        } else if (this.id >= 43 && this.id < 49) {
            newCharacter.classList.add("char__item", "show8");
        } else if (this.id >= 49) {
            newCharacter.classList.add("char__item", "show9");
        }

        ul = document.querySelector(".char__grid");

        newCharacter.classList.add("char__item");

        newCharacter.innerHTML = `
        <img src="${this.photo}" alt="Personage" class='cropped'/>
            <div class="char__name">${this.name}</div>
        `;
        ul.append(newCharacter);
        // onFilter();
    }
}

dataStart
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item) => {
            counter++;

            let card = new Card(
                item.name,
                item.realName,
                item.species,
                item.citizenship,
                item.gender,
                item.birthDay,
                item.deathDay,
                item.status,
                item.actors,
                item.photo,
                item.movies,
                (item.id = counter)
            );
            card.showCard();
        });
    })
    .then(() => {
        const moreButton = document.getElementById("more");
        moreButton.addEventListener("click", charsShower);
    })
    .then(() => {
        onFilter();
    });
