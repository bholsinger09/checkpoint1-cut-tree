export default class SawModel {
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