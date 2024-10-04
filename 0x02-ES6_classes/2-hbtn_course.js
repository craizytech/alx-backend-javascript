export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter method
  get name() {
    return this._name;
  }

  // name setter method
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // length getter method
  get length() {
    return this._length;
  }

  // length setter method
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // students getter method
  get students() {
    return this._students;
  }

  // students setter method
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('students must be an array');
    }
    this._students = newStudents;
  }
}
