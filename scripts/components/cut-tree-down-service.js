///this will import the model and work on the data if any data needs changed

import { Tree, Axe, Saw } from "../models/tree-model.js/index.js.js.js.js";


export default class cutTreeDownService {
  constructor(tree, axe, saw) {

    this.tree = tree;
    this.axe = axe;
    this.saw = saw;


  }
  getClassObjectsData() {
    let tree: new Tree()
    let axe: new Axe()
    let saw: new Saw()
  }

  //Below are button methods that are private to service.
  // $('#axeButton').on("click", function() {
  //   axe.swingAtTree();
  // })

  // $('#sawButton').on("click", function() {
  //   saw.sawTree();
  // })

  // $('#disableTool').on("click", function() {
  //   saw.condition = saw.conditions.disabled;
  //   axe.condition = axe.conditions.disabled;

  // })

  // $('#dullTool').on("click", function() {
  //   axe.condition = axe.conditions.dull;
  //   saw.condition = saw.conditions.dull;

  // })
  // $('#sharpTool').on("click", function() {

  //   axe.condition = axe.conditions.sharp;
  //   saw.condition = saw.conditions.sharp;
  // })

  // $('#normalTool').on("click", function() {

  //   axe.condition = axe.conditions.normal;
  //   saw.condition = saw.conditions.normal;
  // })
  // $('#refreshAll').on("click", function() {
  //   axe.condition = axe.conditions.normal;
  //   saw.condition = saw.conditions.normal;
  //   tree.setHealth(100);
  // })






}

let cutTreeDownService = new cutTreeDownService;


