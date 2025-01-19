// Sélectionne tous éléments HTML ayant classe tab (représentant les onglets)
const tabs = document.querySelectorAll('.tab');
// Sélectionne tous éléments ayant classe content ( contenus associés aux onglets)
const contents = document.querySelectorAll('.content');

// boucle pour chaque onglet
tabs.forEach((tab) => {
    tab.addEventListener('click', function () { //événement click sur chaque onglet fonction est exécutée
        // supprimer la classe "tab-active" de tous les onglets pour désactiver leur état actif
        tabs.forEach((t) => {
            t.classList.remove('tab-active');
        });

        this.classList.add('tab-active'); // ajouter la classe "tab-active" à l'onglet cliqué

        // vérifier quelle classe spécifique est associée à l'onglet cliqué
        if (this.classList.contains('tab-debuter')) { //vérifie si l'onglet cliqué a la classe tab-debuter
            //si oui sélectionne contenu correspondant avec document.querySelector('.content-debuter') 
            // et lui ajoute la classe active.
            document.querySelector('.content-debuter').classList.add('active'); 
            // la meme chose au dessus mais si celui d'avant n'est pas activé
        } else if (this.classList.contains('tab-regles')) {
            document.querySelector('.content-regles').classList.add('active');
            // // la meme chose au dessus mais si celui d'avant n'est pas activé
        } else if (this.classList.contains('tab-combo')) {
            document.querySelector('.content-combo').classList.add('active');
        }
    });
});


//l'onglet cliqué devient actif (on lui ajoute la classe tab-active) et 
// les autres onglets sont désactivés (leur classe tab-active est supprimée)
//ensuite les conditions if et else if vérifient quelle classe spécifique est associée à l'onglet cliqué
//le contenu correspondant à cet onglet reçoit la classe active pour l'afficher
