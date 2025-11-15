class Animal {
  // name: string;
  // species: string;
  // sound: string;

  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // (this.name = name), (this.species = species), (this.sound = sound);
  }

  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const cow = new Animal("cow vai", "cow", "hamba hamba");
console.log(cow.name);

const cat = new Animal("Mini", "cat", "mew mew");
console.log(cat.sound);

cat.makeSound();
