export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    // eslint-disable-next-line max-len
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
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

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
