const title = document.querySelector("#title");


form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
  else{

  }
});

function theTitle(title) {
  return /^[a-zA-Z -]{7,1024}$/.test(title);
}

function setError(input, message) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "control-title error";
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement.parentElement;
  formControl.className = "control-title success";
}

function validateInputs() {
  const titleValue = title.value.trim();
  let Valid = true;

  if (titleValue !== "") {
    if (!theTitle(titleValue)) {
      setError(
        title,
        "The title should have minimum of 7 characters including letters, spaces, and hyphens"
      );
      Valid = false;
    } else {
      setSuccess(title);
    }
  } 
    else {
  }
  return Valid;
}

const np = document.querySelector(".ben-np");
const bronze = document.querySelector(".ben-bronze");
const silver = document.querySelector(".ben-silver");
const gold = document.querySelector(".ben-gold");

const membershipWrapper = document.querySelector(".membership-wrapper");
const mediaQuery = window.matchMedia("(min-width: 502px)");

function displayMembershipBenefits(e) {
  if (mediaQuery.matches) {
    let clickedValue = e.target.value;
    if (clickedValue === "np-membership") {
      np.classList.remove("hidden");
    } else {
      np.classList.add("hidden");
    }
    if (clickedValue === "bronze-membership") {
      bronze.classList.remove("hidden");
    } else {
      bronze.classList.add("hidden");
    }
    if (clickedValue === "silver-membership") {
      silver.classList.remove("hidden");
    } else {
      silver.classList.add("hidden");
    }
    if (clickedValue === "gold-membership") {
      gold.classList.remove("hidden");
    } else {
      gold.classList.add("hidden");
    }
  }
}

membershipWrapper.addEventListener("click", displayMembershipBenefits);
