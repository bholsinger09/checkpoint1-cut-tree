//this is the data off the app
// objects of app and its members are stored here









export default class TreeModel {
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



