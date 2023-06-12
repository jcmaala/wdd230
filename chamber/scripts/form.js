const title = document.querySelector("#title");
const theForm = document.getElementById("form");

form.addEevntListener("submit", (e) =>{
    if(!validateInputs()){
        e.preventDefault();
    }
});

function isTitle(title) {
    return /^[a-zA-Z -]{7,1024}$/.test(title);
  }

const setSuccess = element =>{
    const inputControl = element.parseElement;
    const errorDisp = inputControl.querySelector(".error");

    errorDisp.innerText = "";
    inputControl.classlist.add("success");
    inputControl.classlist.remove("error");
}

function setError(element, message){
    const inputControl = element.parseElement.parseElement;
    const errorDisp = inputControl.querySelector(".error");
    errorDisp.innerText = message;
}
function setSuccess(element) {
    const formControl = element.parentElement.parentElement;
  formControl.className = "form-control success";
  }

function validateInputs(){
    const titleValue = title.value.trim();

    if(titleValue!==""){
        if(!isTitle(titleValue)){
            setError(title, "The title should have minimum of 7 characters which include letters, spaces and hyphens.");
            valid = false;
        }
        else{
            setSuccess(title);
        }
    }
};