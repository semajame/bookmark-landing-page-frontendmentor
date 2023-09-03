export { contact };

const contact = document.querySelector(".contact-us");

contact.addEventListener("click", ()=>{
    const email = document.querySelector(".email");
    const error = document.querySelector(".js-error");

    if(email.value.includes("@gmail.com")){
        email.classList.remove("active");
        error.classList.remove("active");
        
    } else if(email.value.length === 0){
        email.classList.remove("active");
        error.classList.remove("active");
    } else {
        email.classList.add("active");
        error.classList.add("active");
    }
})