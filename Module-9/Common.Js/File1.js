const { a: x } = require("./File2");
const { a } = require("./File3");
// const { add } = require("../utils/add");
// const { subs } = require("../utils/subs");
const { add, subs } = require("../utils/index.mjs");
console.log(x, a);
console.log(add(3, 4));
console.log(subs(x, a));
