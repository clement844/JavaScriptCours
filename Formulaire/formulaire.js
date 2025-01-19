document.getElementById('form-inscription').addEventListener('submit', function (event) {
    event.preventDefault(); // empêche l'envoi formulaire et annule rechargement page

    // récupère les champs du code HTML
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const mdp = document.getElementById('mdp');
    const mdpVerif = document.getElementById('mdp-verif');

    let isValid = true;


    if (pseudo.value.length >= 6) {
        pseudo.classList.add('correct');   // classe CSS pour valider vert
        pseudo.classList.remove('incorrect'); // supprime Classe CSS si utilisé avant
    } else {
        pseudo.classList.add('incorrect');  // pareil qu'au dessus
        pseudo.classList.remove('correct');
        isValid = false; // une mise à jour pour dire formulaire faux
    }

    
    if (email.validity.valid) { // verification email
        email.classList.add('correct'); 
        email.classList.remove('incorrect');
    } else {
        email.classList.add('incorrect');
        email.classList.remove('correct');
        isValid = false;
    }

  
    if (mdp.value.length >= 8) { // longueur du mot de passe, vérification
        mdp.classList.add('correct');
        mdp.classList.remove('incorrect');
    } else {
        mdp.classList.add('incorrect');
        mdp.classList.remove('correct');
        isValid = false;
    }

    
    if (mdp.value === mdpVerif.value && mdp.value.length >= 8) {    // vérification deux mots de passes si pareil
        mdpVerif.classList.add('correct');
        mdpVerif.classList.remove('incorrect');
    } else {
        mdpVerif.classList.add('incorrect');
        mdpVerif.classList.remove('correct');
        isValid = false;
    }

    if (isValid) {
        alert('Formulaire est rempli comme il est demander !'); // apparition haut de page avec texte
    } else {
        alert('Veuillez corriger les erreurs dans le formulaire. Respecter les conditions pour pouvoir avoir une inscription');
        // apparition haut de page avec texte
    }
});


//Quand l'utilisateur soumet le formulaire le comportement par défaut est annulé grâce à event.preventDefault()
//chaque champ du formulaire est vérifié individuellement :
//  1. Pseudo : doit contenir au moins 6 caractères
//  2. Email : doit être valide (vérifié avec validity.valid)
//  3. Mot de passe : doit contenir au moins 8 caractères
//  4. Vérification du mot de passe : doit être identique au premier mot de passe
//des classes CSS (correct ou incorrect) sont ajoutées/supprimées 
// pour indiquer visuellement les erreurs ou les validations
//Si tous les champs sont valides, un message de succès s'affiche sinon l'inverse un message d'erreur est montré
