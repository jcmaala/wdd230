const dataJSON = "https://jcmaala.github.io/wdd230/chamber/json/directory.json";

const displayCompanies = (companies) => {
    const cards = document.querySelector("#highlight-card");
  
    companies = shuffle(companies);
  
    let search = companies.filter(
      (company) =>
        company.membership === "Gold Member" ||
        company.membership === "Silver Member"
    );
    search = shuffle(search);
    search = search.slice(0, 3);
    let adder = 1;
    search.forEach((company) => {
      let box = document.createElement("section");
      let name = document.createElement("h2");
      let logo = document.createElement("img");
      let slogan = document.createElement("p");
      let website = document.createElement("a");
      let number = document.createElement("p");
      
  
      name.textContent = `${company.name}`;
      slogan.textContent = `${company.slogan}`;
      website.textContent = "Website";
      number.textContent = `${company.phone}`
  
      logo.setAttribute("src", company.logo);
      logo.setAttribute("alt", `${company.name}`);
      logo.setAttribute("loading", "lazy");
      website.setAttribute("href", `${company.url}`);
      website.setAttribute("target", "_blank");
      
      box.classList.add(`highlight${adder}`);
      name.classList.add("company-name");
      logo.classList.add("company-logo");
      logo.setAttribute("width", "120");
      logo.setAttribute("height", "100");
      slogan.classList.add("slogan");
      website.classList.add("website");
  
      cards.appendChild(box);
      box.appendChild(name);
      box.appendChild(logo);
      box.appendChild(slogan);
      box.appendChild(number);
      box.appendChild(website);
      adder++;
    });
};

async function getCompaniesData() {
  const response = await fetch(dataJSON);
  const data = await response.json();
  displayCompanies(data.companies);
}

getCompaniesData();

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

