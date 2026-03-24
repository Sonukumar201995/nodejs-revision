const prompt = require("prompt-sync")();

let age=prompt("Enter your age");
if(age<18)
{
    console.log("you are not eligible for driving")
}else
{
    console.log("you are eligible")
}