
import TreeControler from "./components/tree-controler.js";

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
Import controler
*/
let treeController = new TreeControler

class TreeApp {
    constructor() {
        this.controllers = {
            //instatiate tree controler
            treeController
        }
    }

}

window['treeApp'] = new TreeApp()





















