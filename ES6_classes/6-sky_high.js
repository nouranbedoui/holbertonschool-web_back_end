import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call parent class constructor
    super(sqft);

    // Type validation
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Store in underscore attribute
    this._floors = floors;
  }

  // Getter for sqft (inherited attribute)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
