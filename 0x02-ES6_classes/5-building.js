export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.evacuationWarningMessage === Building.prototype.methodToOverride) {
      throw new Error('Class extending Building must override evacuationWarningMessage')
    }
  }

  // sqft getter method
  get sqft() {
    return this._sqft;
  }

  // sqft setter method
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
