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





/*
on click functions


*/



/*
functions for radio specific buttons

*/



/*
draw function
this has methods that are use when user performs
actions that change the page layout such as different picture



*/


/*
functions that need used at start of page

*/

//initialize/call functions here