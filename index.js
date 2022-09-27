const studentInfo = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hello ${studentInfo.studentData.name}, at ${studentInfo.studentData.campus}`,
    e: "Uu",
    T: "U"
}));