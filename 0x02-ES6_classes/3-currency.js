export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  // getter method: code
  get name() {
    return this._name;
  }

  // setter method: name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // code getter method
  get code() {
    return this._code;
  }

  // code setter method
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // displayFullCurrency method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
