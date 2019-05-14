import ToolService from "../service/toolservice";

///this needs service class imported
// this will manage with the service which has the data
// this will be what will be re rendering page 

//below here is what the controler will perform
//below are the function called to re render page when user performs actions 



let getToolService = new ToolService;




export default class TreeControler {
  constructor() {

    this.useAxe = getToolService.getAxe
    this.useSaw = getToolService.getSaw


  }
  getTools() {
    getToolService.normalizeTools()
    getToolService.sharpenTools()
    getToolService.dullTools()
  }

}






