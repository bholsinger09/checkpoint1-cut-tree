//requirments

/*
This game must have the following :

object with health and health updates that are visable while game is played
minimum of 6 buttons
3 buttons to affect status of object.
this three buttons must affect the object status in different amounts
3 additional elements allowing user to affect how much the 3 buttons change the object status

*/

//we are going to need to export the classes to main.js

//make sure we have window['app'] = new App()



/*
Classes
*/


class Tree {
    constructor() {
        //constructor builds the tree object
        // using keyword "this" to work on the object

        this.health = 100;
        this.conditions = {
            healthyAndGrowing: { maxHealth: 100, minHealth: 75, description: "Healthy and Growing", imgfile: 'img/healthy.jpg' },
            aFewChipsMissing: { maxHealth: 74, minHealth: 50, description: "a few chips missing", imgfile: 'img/damaged.jpg' },
            falling: { maxHealth: 49, minHealth: 25, description: "falling tree", imgfile: 'img/falling.jpg' },
            lonelyStub: { maxHealth: 24, minHealth: 0, description: "lonely stub", imgfile: 'img/stub.jpg' }
        }
    }

    _updateUI = function () {
        //function to update changes on the page
        var currentCondition = this._getCondition();
        $('#tree').attr("src", currentCondition.imgfile);
        $('#hNum').text(this.health);
        $('#hCon').text(currentCondition.description);
        var breakpoint = 0;

    };

    _getCondition = function () {
        //using _ to keep function as a private function
        /*
        this will get the current condition and compare it to the conditions object

        */
        var currentCondition = null;
        for (var key in this.conditions) {
            if (this.conditions[key].maxHealth >= this.health && this.conditions[key].minHealth < this.health) {
                currentCondition = this.conditions[key];
            }
        }
        return currentCondition;
    };

    adjustHealth = function (healthAdjustment) {
        /*
        method to call dirctly on the class
        here we adjust the health of the tree 
        the updateUI function is being used on the class 

        */
        this.health += healthAdjustment;
        this._updateUI();
    }

    setHealth = function (newHealthValue) {
        this.health = newHealthValue;
        this._updateUI();
    }
}

var tree = new Tree();

class Axe {
    constructor() {
        this.conditions = {
            sharp: { damage: -30, description: "sharp" },
            normal: { damage: -20, description: "normal" },
            dull: { damage: -10, description: "dull" },
            disabled: { damage: 0, description: "disabled" }
        }
        this.condition = this.conditions.normal
    };
    swingAtTree = function () {
        tree.adjustHealth(this.condition.damage);
    }
}
var axe = new Axe();

class Saw {
    constructor() {
        this.conditions = {
            sharp: { damage: -20, description: "sharp" },
            normal: { damage: -10, description: "normal" },
            dull: { damage: -5, description: "dull" },
            disabled: { damage: 0, description: "disabled" }
        }

        this.condition = this.conditions.normal
    };
    sawTree = function () {
        tree.adjustHealth(this.condition.damage);
    }
}
var saw = new Saw();


//below here is what the controler will perform
$('#axeButton').on("click", function () {
    axe.swingAtTree();
})

$('#sawButton').on("click", function () {
    saw.sawTree();
})

$('#disableTool').on("click", function () {
    saw.condition = saw.conditions.disabled;
    axe.condition = axe.conditions.disabled;

})

$('#dullTool').on("click", function () {
    axe.condition = axe.conditions.dull;
    saw.condition = saw.conditions.dull;

})
$('#sharpTool').on("click", function () {

    axe.condition = axe.conditions.sharp;
    saw.condition = saw.conditions.sharp;
})

$('#normalTool').on("click", function () {

    axe.condition = axe.conditions.normal;
    saw.condition = saw.conditions.normal;
})
$('#refreshAll').on("click", function () {
    axe.condition = axe.conditions.normal;
    saw.condition = saw.conditions.normal;
    tree.setHealth(100);
})













