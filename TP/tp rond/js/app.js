// JE VAIS ATTENDRE QUE MA PAGE SOIT ENTIRREMENT CHARGÉE

// a mettre tout le temps
document.addEventListener("DOMContentLoaded", function (event) {

    // FAUDRA CAPTER L'ÉVÉNEMENT CLICK SUR LE BODY (DOCUMENT)

    this.addEventListener("click", function(e) {

        // FAUDRA RÉCUPÉRER LA POSITION EN X ET Y DU CLICK (EVENT)
        let x = e.clientX;
        let y = e.clientY;
    
        // FAUDRA GÉNÉRER UNE WIDTH/HEIGHT ALÉATOIRE POUR GÉNÉRER LE CERCLE (50 ET 150PX) (MATH RANDOM)
        
        let random_width_height = Math.floor(Math.random() * 150) + 50;
        // FAUDRA GÉNÉRER UNE COULEUR ALÉATOIRE (3 couleurs primaires (0-256))
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let red = Math.floor(Math.random() * 256);
    
        // FAUDRA CRÉER LE CERCLE (DIV)
        // AVEC LA WIDTH/HEIGHT ALÉATOIRE
        // LA POSITION DU CLICK
        // POSITION ABSOLUTE
        // X : LEFT
        // Y : TOP

        let circle = document.createElement("div");
        circle.style.width = random_width_height + "px";
        circle.style.height = random_width_height + "px";
        circle.style.backgroundColor = `rgb(${blue}, ${green}, ${red})`;
        circle.style.borderRadius = "50%";
        circle.style.position = "absolute";
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // FAUDRA AJOUTER LE CERCLE CRÉÉ DANS LE BODY (append)
   this.body.appendChild(circle);
        // FAUDRA FAIRE DESCENDRE LE CERCLE JUSQU'AU BORD DE L'ÉCRAN EN BAS (animate/onfinish)
        const animation = circle.animate(
            [
                { transform: "translateX(0px)" },   
                { transform: "translatey(600px)" }  
            ],
            {
                duration: 2000, 
                iterations: 1   
            }
        );
        
        
        animation.onfinish = () => {
            circle.style.transition = "transform 0.9s ease, opacity 0s ease";
            circle.style.opacity = "0"; 
        };
        // AU BOUT DE DEUX SECONDES FAUDRA FAIRE DISPARAÎTRE LE CERCLE AVEC UNE ANIMATIONS/TRANSITION
        // SET TIMEOUT
    
        // your code here



    });

});