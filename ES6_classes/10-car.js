const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const Cls = this.constructor;
    return new Cls();
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
