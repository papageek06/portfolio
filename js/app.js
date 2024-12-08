const btnNav = document.querySelectorAll(".nav-item");
const sectionDev =document.getElementById("dev");
const sectionCompetence = document.getElementById("competence");
const sectionExperience = document.getElementById("experience")
const sectionCode = document.getElementById("code")

hideSection();

btnNav.forEach(element => {
    element.addEventListener("click" , function(){
        console.log(element);
        hideSection();
    switch (element.id) {
        case "btnCompetence":
            sectionCompetence.classList.add("visible")
            break;
        case "btnExperience":
            sectionExperience.classList.add("visible")
            break;
        case "btnCode":
            sectionCode.classList.add("visible")
            break;
        case "btnDev":
            sectionDev.classList.add("visible")
    
        default:
            break;
    }})})

function hideSection (){
    let section = document.querySelectorAll("section");
    console.log(section);
    section.forEach(element => {
        if (element.classList != "visible" ) {
            element.classList.remove("visible")
            element.classList.toggle("position:absolute")

            // sectionDev.style = "opacity : 0"
        }
        // else if (element == sectionDev){
        //      sectionDev.style = "opacity : 0.9"
        // }
    })
};

sectionCompetence.classList.add("visible")

