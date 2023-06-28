const myJSON = "https://jcmaala.github.io/wdd230/chamber/json/directory.json";
const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");
const display = document.querySelector(".cards");

const displayDirectory = (companies) => {
  const cards = document.querySelector("div.cards");

  companies.forEach((company) => {
    let logo = document.createElement("img");
    let name = document.createElement("h2");
    let card = document.createElement("section");
    let web = document.createElement("a");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let membership = document.createElement("p");
    

    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    web.textContent = `${company.url}`;
    membership.textContent = `${company.membership}`;

    logo.setAttribute("src", company.logo);
    logo.setAttribute("alt", `${company.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "120");
    logo.setAttribute("height", "100");
    web.setAttribute("href", `${company.url}`);
    web.setAttribute("target", "_blank");

    card.classList.add("company-card");
    address.classList.add("address");
    phone.classList.add("phone");
    web.classList.add("web");
    logo.classList.add("company-logo");
    

    cards.appendChild(card);
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(membership);
  });
};

async function getData() {
    const response = await fetch(myJSON);
    const data = await response.json();
    displayDirectory(data.companies);
  }
  
getData();


gridBtn.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  display.classList.remove("grid-cols-2");
  display.classList.remove("grid-cols-3");
}
