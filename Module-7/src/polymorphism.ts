// The second pillar of oop
class Person {
  getSleep() {
    console.log(`I am a normal person, I sleep for 8 hours`);
  }
}
class Student extends Person {
  getSleep() {
    console.log(`I am a student, I sleep for 6 hours`);
  }
}

class Developer extends Person {
  getSleep() {
    console.log(`I am a Developer, I sleep for 4 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  return param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

// getSleepingHours(person1);
// getSleepingHours(person2);
// getSleepingHours(person3);

// ********************************

class Shape {
  getArea() {
    return 0;
  }
}
class Circle extends Shape {}
