/* Consignes
Le but du jeu, c’est de faire deviner un nombre de votre choix (entre 0 et 100) à l’utilisateur.

Vous allez générer un nombre aléatoire entre 0 et 100.

La boucle du jeu dure tant que l’utilisateur n’a pas trouvé le nombre mystère.

Vous allez devoir lui demander de saisir un nombre grâce à window.prompt.

Si le nombre de l’utilisateur est inférieur au vôtre, utilisez window.alert pour lui dire que c’est plus.

Si le nombre de l’utilisateur est supérieur au vôtre, utilisez window.alert pour lui dire que c’est moins.

Si son nombre est égal au vôtre : dites lui qu’il a gagné.*/



let user;
let max=100;
let nombreAleatoire = Math.floor(Math.random()* max);

user = window.prompt("Saisir un nombre entier entre 0 et 100");
user = Number(user);


while (nombreAleatoire !== user) {

    if (user < nombreAleatoire) {
        window.alert("C'est plus");

      }  else if (user > nombreAleatoire) {
        window.alert("C'est moins");

        } else { 
            window.alert("Bravo c'est gagné");
            break;
            }   
        /* possibilité de demander un nouveau nombre */
            user = window.prompt("Saisir un nombre entier entre 0 et 100");         
} 



