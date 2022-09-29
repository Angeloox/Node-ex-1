const userInfo = require("./information");

const cowsay = require("cowsay");
const { object } = require("./information");

console.log(cowsay.say({
    text : `Hello my name is ${object.myName} and my campus is in ${object.campus}`,
    e : "--",
    T : "o",
}));