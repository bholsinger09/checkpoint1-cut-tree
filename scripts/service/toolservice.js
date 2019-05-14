import TreeModel from "../models/tree-model.js"
import SawModel from "../models/saw-model";
import AxeModel from "../models/axe-model";

let tree = new TreeModel
let saw = new SawModel
let axe = new AxeModel





export default class ToolService {

  constructor() {

    this.getAxe = function () {

      $('#axeButton').on("click", function () {
        axe.swingAtTree();
      })
    }
    this.getSaw = function () {
      $('#sawButton').on("click", function () {
        saw.sawTree();
      })
    }


  }
  dullTools() {
    $('#dullTool').on("click", function () {
      axe.condition = axe.conditions.dull;
      saw.condition = saw.conditions.dull;
    })
  }
  sharpenTools() {
    $('#sharpTool').on("click", function () {

      axe.condition = axe.conditions.sharp;
      saw.condition = saw.conditions.sharp;
    })

  }

  normalizeTools() {
    $('#normalTool').on("click", function () {

      axe.condition = axe.conditions.normal;
      saw.condition = saw.conditions.normal;
    })

  }

  disableTools() {
    $('#disableTool').on("click", function () {
      saw.condition = saw.conditions.disabled;
      axe.condition = axe.conditions.disabled;

    })

  }

  refreshAllService() {
    $('#refreshAll').on("click", function () {
      axe.condition = axe.conditions.normal;
      saw.condition = saw.conditions.normal;
      tree.setHealth(100);
    })

  }




}













