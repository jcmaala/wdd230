const title = document.getElementById("title");
const theForm = document.getElementById("form");
const err = document.getElementById("invalid");


form.addEventListener("submit", (e) =>{
    const title_value = /^[a-zA-Z -]{7,1024}$/;
    const user_value = e.target.value;
    const valid = title_value.test(user_value)

    if(valid){
        err.style.display = "block";
    }
    else{
        err.style.display = "none";
    }


});