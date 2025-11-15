class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(hours: number) {
    console.log(`${this.name} sleeps ${hours}`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(hours: number) {
    console.log(`${this.name} is studying ${hours} hours`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(hours: number) {
    console.log(`${this.name} takes ${hours} class`);
  }
}
// function guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const userInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(44);
  } else if (isTeacher(user)) {
    user.takeClass(4);
  } else {
    user.getSleep(5);
  }
};

const student = new Student("Mizan");
const teacher = new Teacher("Mahin");

userInfo(teacher);
