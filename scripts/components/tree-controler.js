///this needs service class imported
// this will manage with the service which has the data
// this will be what will be re rendering page 

//below here is what the controler will perform
//below are the function called to re render page when user performs actions 

import { cutTreeDownService } from "./cut-tree-down-service.js"

class CutTreeDownControler {
  constructor() {
  }
  buttonsMethods() {
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


  }



}

let cutTreeDownControler = new CutTreeDownControler;
