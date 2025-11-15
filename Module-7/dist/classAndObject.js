"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        (this.name = name), (this.species = species), (this.sound = sound);
    }
}
const cow = new Animal("cow vai", "cow", "hamba hamba");
console.log(cow);
//# sourceMappingURL=classAndObject.js.map