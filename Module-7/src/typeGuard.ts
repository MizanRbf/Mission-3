// Typeof Guard
type Number = string | number;
const add = (num1: Number, num2: Number) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
console.log(add(33, 55));

// in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This user is ${user.name} and his role is ${user.role}`);
  } else {
    console.log(`this is normal user`);
  }
};

const result1 = getUserInfo({ name: "Mizan", role: "Admin" });
