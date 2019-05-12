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

let axeButton = document.getElementById('axeButton');
sawButton = document.getElementById('sawButton');
healAllButton = document.getElementById('healAllButton');
treImage = document.getElementById('tree');
healthNum = document.getElementById('hNum');
healthCon = document.getElementById('hcon');

/*
Classes
*/

class Tree {
    constructor() {
        this.health = 100;
        this.conditions = {healthyAndGrowing: { maxHealth: 100, minHealth: 75, description: "Healthy and Growing"},
        aFewChipsMissing: {maxHealth: 74, minHealth: 50, description: "a few chips missing"},
        falling: {maxHealth: 49, minHealth: 25, description: "falling tree"},
        lonelyStub: {maxHealth: 24, minHealth: 0, description: "lonely stub"}
       } 
        updateUI = function () {
            var currentCondtion = this.getCondition();
        };
        getCondition = function () {
            var condition = null;
            this.conditions.array.forEach(element => {
                if (element.maxHealth >= this.health && element.minHealth < this.health) {
                    condition = element;
                    
                }
            });
            return condition;
        };
    }
    static adustHealth(healthAdjustment) {
        this.health += healthAdjustment;
        this.updateUI;
    }
}

var tree = new Tree();




    
    



/*
on click functions



*/



/*
functions for radio specific buttons

*/







