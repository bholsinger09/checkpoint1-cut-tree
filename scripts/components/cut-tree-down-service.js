///this will import the model and work on the data if any data needs changed

import { Tree, Axe, Saw } from "../model/cut-tree-down-model.js";


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






}

let cutTreeDownService = new cutTreeDownService;


