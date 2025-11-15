class Parent {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getSleep(hours: number) {
    console.log(`${this.name}  slept ${hours} hours`);
  }
}
class Student extends Parent {}
const student1 = new Student("Mizan", 26);
student1.getSleep(5);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, designation: string) {
    super(name, age);
    this.designation = designation;
  }

  takeClass(hours: number) {
    console.log(`He took ${hours} class`);
  }
}

const teacher1 = new Teacher("Masud", 44, "Prof");
console.log(teacher1.name);
teacher1.takeClass(5);
