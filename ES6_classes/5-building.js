export default class Building {
    constructor(sqft) {
      // Type validation
      if (typeof sqft !== 'number') {
        throw new TypeError('Square feet must be a number');
      }
  
      // Store in underscore attribute
      this._sqft = sqft;
  
      // Check for abstract class and evacuationWarningMessage implementation
      if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }
