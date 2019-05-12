//requirments

/*
This game must have the following :

object with health and health updates that are visable while game is played
minimum of 6 buttons
3 buttons to affect status of object.
this three buttons must affect the object status in different amounts
3 additional elements allowing user to affect how much the 3 buttons change the object status

*/

/*
Variables:
*/

let tree= {}
axeButton = document.getElementById('axeButton');
sawButton = document.getElementById('sawButton');
healAllButton = document.getElementById('healAllButton');
treImage = document.getElementById('tree');
healthNum = document.getElementById('hNum');
healthCon = document.getElementById('hcon');

/*

build objects:
object is a tree
*/
tree = {
    health: 100,
    conditions: 
        {healthyAndGrowing: { maxHealth: 100, minHealth: 75, description: "Healthy and Growing", enumNum: 0},
         aFewChipsMissing: {maxHealth: 74, minHealth: 50, description: "a few chips missing", enumNum: 0 },
         falling: {maxHealth: 49, minHealth: 25, description: "falling tree", enumNum: 0 },
         lonelyStub: {maxHealth: 24, minHealth: 0, description: "lonely stub", enumNum: 0 }

        }
         

};



function cutTreeHealth(){
    
    let i = healthNum.innerText
    let maxHealthHealthy = tree.conditions.healthyAndGrowing.maxHealth;
    let minHealthHealthy = tree.conditions.healthyAndGrowing.minHealth;
    let maxHealthCut = tree.conditions.aFewChipsMissing.maxHealth;
    let minHealthCut = tree.conditions.aFewChipsMissing.minHealth;
    let maxHealthfalling = tree.conditions.falling.maxHealth;
    let minHealthfalling = tree.conditions.falling.minHealth;
    let maxHealthStub = tree.conditions.lonelyStub.maxHealth;
    let minHealthStub = tree.conditions.lonelyStub.minHealth;

    
   i--
    
    // for ( i = 100; i <= maxHealthHealthy  && i >= minHealthHealthy; i-- ){
    //      console.log(i);
    //      console.log (tree.conditions.healthyAndGrowing.description)
    //  }
    
     

}



/*
on click functions



*/



/*
functions for radio specific buttons

*/







