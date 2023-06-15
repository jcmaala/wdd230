const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let birth = document.createElement("p");
        let placebirth = document.createElement("p");
        let portrait = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placebirth.textContent =`Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ______________`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(placebirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

async function getProphetData() {
    const response= await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData();