//1
let height=4;
let width=7;
console.log(`The area of the rectangle is:${height*width}`);

//2
let degree=40;
let F=(degree*9/5)+32;
console.log(`NN°C ${degree} NN°F ${F}`);
let C=(F-32)*5/9;
console.log(`NN°F ${F} NN°C ${C}`);

//3
let hour=1;
let seconds = hour * 60 * 60;
console.log(`${hour} hours =  ${seconds} Seconds`);

//4
let Name="Haneen";
let family="Alhagbani";
console.log(Name + " " + family);

//5
var bill=10.25 + 3.99 + 7.15;
var tip= bill*0.15;
var total= bill+tip;
console.log(`total: ${total}`);

//6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);

//7
var firstName="Noura";
var interest="Learn Js";
var hobby="Watch TV";
var awesomeMessage="Hi, my name is _____. I love ______. In my spare time, I like to ______.";

console.log(`Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`);
