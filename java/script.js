const modal1=document.querySelector(".modal");
const overlay1=document.querySelector(".overlay");

function openMode(){
    console.log("Modal is Open");
    modal1.classList.add("active");
    overlay1.classList.add("overlayactive")
}

function closeMode(){
    modal1.classList.remove("active");
    overlay1.classList.remove("overlayactive");
}