// Part 1 - Init des variables du programme //

let scoreG = [ 0, 0];
let scoreLive = 0;
let joueurActif = 1;

// Partie 2 - Réinistialiser la game en cours (tout remettre à 0)//

document.getElementById('score-1').textContent= '0'; // réinit "score save" pour le joueur 1 
document.getElementById('score-2').textContent= '0'; // réinit "score save" pour le joueur 2 
document.getElementById('encours-1').textContent= '0'; // réinit "score en live" pour le joueur 1 
document.getElementById('encours-2').textContent= '0'; // réinit "score en live" pour le joueur 2 
document.querySelector(`.de`).style.display = 'none'; // réinit du dé

// Partie 3 - Gestion du click //

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

            joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
            scoreLive = 0 ;

            document.getElementById(`encours-${joueurActif}`).textContent = 0;
            document.querySelector('.joueur-1-panel').classList.toggle('active'); 
            document.querySelector('.joueur-2-panel').classList.toggle('active'); 
            document.querySelector('.de').style.display = 'none';

        }
    })


// Partie 4 - Gestion du bouton commute//




