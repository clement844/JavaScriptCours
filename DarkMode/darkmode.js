const darkModeButton = document.querySelector('.dark-mode-button'); // permet de sélectionner élément HTML en fonction CSS

darkModeButton.addEventListener('click', () => { // fonction activer/désactiver mode sombre & exécute clic détecté
    document.body.classList.toggle('dark-mode');// basculer classe "dark-mode" sur body

    document.querySelector('header').classList.toggle('dark-mode'); // sélectionne l'élément <header> & classList.toggle pour ajouter ou retirer la classe dark-mode    
    document.querySelector('.Fil-A').classList.toggle('dark-mode'); //sélectionne l'élément <Fil-A>
    document.querySelectorAll('.tabs').forEach(tab => tab.classList.toggle('dark-mode')); //sélectionne l'élément <tabs>*
    //sélectionne l'élément <tab> similaire mais pour élément classe tab, puis va alterner clase dark sur chaque onglet, par exemple comment débuter
    document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('dark-mode'));  
    

    // modifier le texte du bouton
    if (document.body.classList.contains('dark-mode')) { // verifie classe présente sur élément
        darkModeButton.textContent = 'Mode Clair';
    } else {
        darkModeButton.textContent = 'Mode Sombre';
    }
});


// la couleur est géré par CSS et modifier par les lignes 6 à 10

//Quand l'utilisateur clique sur le bouton avec la classe dark-mode-button une fonction est déclenchée 
//la fonction bascule (ajoute ou enlève) la classe dark-mode sur plusieurs éléments :
//  1. <body> pour changer le style global
//  2.<header>, .Fil-A, .tabs, et .tab pour appliquer le mode sombre à des sections spécifiques
//Le texte du bouton est mis à jour (mode sombre ou clair)
//Les styles visuels sont définis dans le CSS, associés à la classe dark-mode
