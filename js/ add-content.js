//document.write("Welcome to MEAN CAMP!");
$("#main").append(["Thang Nguyen"]);

var name= "Thang Nguyen";
$(".header").prepend(name);
var test = "not Thang";
var newTest = test.replace("name", "newTest");

console.log(newTest);
