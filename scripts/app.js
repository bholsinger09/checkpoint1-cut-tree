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

let axeButton = document.getElementById('axeButton'),
    sawButton = document.getElementById('sawButton'),
    healAllButton = document.getElementById('healAllButton'),
    treImage = document.getElementById('tree'),
    healthNum = parseInt(document.getElementById('hNum').innerText),
    healthCon = document.getElementById('hcon'),
    sharpTool = document.getElementById('sharpTool'),
    dullTool = document.getElementById('dullTool'),
    disableTool = document.getElementById('disableTool')

/*
Classes
*/


class Tree {
    constructor() {
        //constructor builds the tree object
        // using keyword "this" to work on the object

        this.health = 100;
        this.conditions = {
            healthyAndGrowing: { maxHealth: 100, minHealth: 75, description: "Healthy and Growing" },
            aFewChipsMissing: { maxHealth: 74, minHealth: 50, description: "a few chips missing" },
            falling: { maxHealth: 49, minHealth: 25, description: "falling tree" },
            lonelyStub: { maxHealth: 24, minHealth: 0, description: "lonely stub" }
        }
        this.updateUI = function () {
            //function to update changes on the page
            var currentCondtion = this.getCondition();
            var $treeImage = $('#tree');
            var $healthNumber = $('#hnum');
            $healthNumber.html = (this.health);



        };
        this.getCondition = function () {
            /*
            this will get the current condition and compare it to the conditions object

            */
            var condition = null;           
            this.conditions.array.forEach(treeEl => {
                if (treeEl.maxHealth >= this.health && treeEl.minHealth < this.health) {
                    condition = treeEl;

                }
            });
            return condition;
        };
    }
    static adustHealth(healthAdjustment) {
        /*
        method to call dirctly on the class
        here we adjust the health of the tree 
        the updateUI function is being used on the class 

        */
        this.health += healthAdjustment;
        this.updateUI;
    }    
}

var tree = new Tree();

class Axe {
    constructor() {
        this.damage = -20;        
    };
    static swingAtTree(){
        tree.adjustHealth(this.damage);
    }
}
var axe = new Axe();

class Saw{
    constructor(){

    };
}
var saw = new Saw();

class Refresh {
    constructor(){

    };
}
var refresh = new Refresh();

class Disable{
    constructor(){

    };
}
var disable = new Disable();







$('#axeButton').onClick(function(){
    axe.swingAtTree();
})














