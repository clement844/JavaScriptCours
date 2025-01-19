class Guerrier { // classe appelée Guerrier créant des objets
    constructor(name, attack, pv,) { // objet recevant 3 arguments
        this.name=name //stocke nom guerrier
        this.attack=attack; //stocke l'attaque
        this.pv = pv; //stocke la vie
        
    }


    getAttack(victime){ 
        // message indiquant que l'attaquant entre en combat contre la victime
        console.log(this.name, "entre en combat avec ", victime.name) 
        // petite soustraction vie-attaque
        victime.pv = victime.pv - this.attack 
        // message indiquant nombre de vie restant
        console.log(victime.name, "à maintenant", victime.pv, "points de vie. Ca passe pour cette fois")
    }
}

// création de guerrier objet
let combattant1 = new Guerrier("Batman", 5, 10);
let combattant2 = new Guerrier("Superman", 3, 15);


// message indiquant les deux combatants
console.log("Les deux combattants sont", combattant1.name, "et", combattant2.name )


function combat(combattant1, combattant2){ //fonction qui simule combat entre deux guerriers
    // boucle qui continue tant que les deux combattants ont des points de vie supérieurs à 0 :) 
    while(combattant1.pv > 0 && combattant2.pv > 0) {

        combattant1.getAttack(combattant2);
        
        // vérifie si combattant2 n'a plus de points de vie après l'attaque
        if ( combattant2.pv <= 0 ) { // Si oui, affiche un message de défaite pour combattant2 
        // combattant1 vainqueur
            console.log(combattant2.name, " Tu aurais pu faire mieux, surtout par lui");
            return combattant1.name; }



// vérifie si combattant1 n'a plus de points de vie après l'attaque
        combattant2.getAttack(combattant1);

 // Si oui, affiche un message de défaite pour combattant1  
        // combattant2 vainqueur
        if (combattant1.pv <= 0) {
            console.log(combattant1.name, " Je te croyais beaucoup plus malin ", combattant2.name);
            return combattant2.name;
         }

         
        
    }

}

//appelle fonction combat pour faire s'affronter combattant1 et combattant2
combat(combattant1, combattant2);



//Une classe Guerrier est créée pour représenter des combattants avec un nom une attaque
// et des points de vie
//une méthode getAttack permet à un guerrier d'attaquer un autre en réduisant ses points de vie
//une fonction combat simule un combat entre deux guerriers avec des attaques successives 
// jusqu'à ce que l'un des deux perde tous ses points de vie
//Le combat est lancé en appelant la fonction combat avec deux guerriers.
