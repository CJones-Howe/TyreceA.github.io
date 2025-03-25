//Using let
let name ="Tyrece";
let age = 20;
let sports = "Soccer and basketball";
let isStudent = true;
let isSophmore = true;

document.getElementById("demo1").innerHTML = 
"Name: " + name + "<br>Age: " + age + "<br>sports: " + sports + "<br>Student: " + isStudent + "<br>Sophmore: " + isSophmore;

var city = "Albany";  //Function-scoped
let state = "NY";
const country = "USA";

document.getElementById("demo2").innerHTML = 
"Location: " + city + ", "+ state + ", " + country;