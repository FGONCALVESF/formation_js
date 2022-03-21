
// LES PREMIERES VARIABLES //

let scoreG = [0, 0];
let scoreLive = 0;
let joueurActif = 1;

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//

// DECLARATION DES FONCTIONS UTILISABLES LE LONG DU CODE//


//Fonction qui permet de changer de joueur//


function passeLeTour() {
joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
            scoreLive = 0 ;

            document.getElementById(`encours-${joueurActif}`).textContent = 0;
            document.querySelector('.joueur-1-panel').classList.toggle('active'); 
            document.querySelector('.joueur-2-panel').classList.toggle('active'); 
            document.querySelector('.de').style.display = 'none';}


// Fonction qui permet de recommencer ou commencer une partie //

            
function debutDeJeu() {

    let scoreG = [ 0, 0];
    let scoreLive = 0;
    let joueurActif = 1;

document.getElementById('score-1').textContent= '0'; // réinit "score save" pour le joueur 1 
document.getElementById('score-2').textContent= '0'; // réinit "score save" pour le joueur 2 
document.getElementById('encours-1').textContent= '0'; // réinit "score en live" pour le joueur 1 
document.getElementById('encours-2').textContent= '0'; // réinit "score en live" pour le joueur 2 
document.querySelector(`.de`).style.display = 'none'; // réinit du dé
}


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//


// DEBUT DE JEU //

debutDeJeu();

// Creation du fonctionnement du button "Lancer le dé"//

let buttonLancer = document.querySelector(`.btn-lancer`);
    buttonLancer.addEventListener('click', () => {

        let alea = Math.floor(Math.random() * 6) + 1;

        let theDe = document.querySelector('.de');
        theDe.style.display = 'block';
        theDe.src = `resources/images/de-${alea}.png`;

        if (alea !== 1) {

            scoreLive += alea
            document.getElementById(`encours-${joueurActif}`).textContent = scoreLive
        }

        else {

            passeLeTour();

        }
    })


// Creation du fonctionnement du button "Commutez" //

    let buttonCommutez = document.querySelector(`.btn-commuter`);
    buttonCommutez.addEventListener('click' , () => {

        scoreG[joueurActif - 1] += scoreLive;
        document.getElementById(`score-${joueurActif}`).textContent = scoreG[joueurActif - 1];
        scoreLive = 0;
    
        passeLeTour();

    })

// // Creation du fonctionnement du button "Nouveau jeu" // //

let buttonNewGame = document.querySelector(`.btn-nouveau`);
    buttonNewGame.addEventListener('click' , () => {

        debutDeJeu();

    })

// Création et déclaration du vainqueur //




