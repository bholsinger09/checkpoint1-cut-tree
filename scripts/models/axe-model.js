export default class AxeModel {
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