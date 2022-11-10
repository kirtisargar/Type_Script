var emp = {
    name: "Sachin",
    score: 120
};
console.log(emp);
for (var e in emp) {
    console.log(e);
}
var courses = ["Angular", "React.js", ".Net"];
courses.push("java");
courses.push(10);
for (var index = 0; index < courses.length; index++) {
    console.log(courses[index]);
}
console.log("=======Destructing Array========");
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
console.log("======Destructing oblect========");
var std = {
    firstName: "Sachin",
    middleName: "Dattatrey",
    lastName: "Dharmadhikari"
};
var userFirstName = std.firstName, usermiddleName = std.middleName, userlastName = std.lastName;
console.log(userFirstName);
console.log(usermiddleName);
console.log(userlastName);
console.log("===========");
var arr = [];
arr.pop();
arr.splice(4, 7, 8);
console.log(arr.toString());
//function add (num1:number,num2:number){
//   return num1+num2;
//}
//console.log(add(34,56));
function display(id, name, roll) {
    console.log("Id", id);
    console.log("Name", name);
    console.log("Roll", roll);
}
display(2, "sachin", "Admin");
display(3, "rahul");
