var employee = {
    emp_id: 13,
    emp_name: "xyz",
    emp_salary: 40000,
    emp_address: "abc"
};
console.log(employee);
//traverse for in loop is used
console.log("========object traverse==========");
for (var key in employee) {
    console.log(key);
    console.log(employee[key]);
}
//destructuring
console.log("object Destructing=====>");
var userid = employee.emp_id, username = employee.emp_name, empsalary = employee.emp_salary, empAddress = employee.emp_address;
console.log(userid);
console.log(username);
console.log(empsalary);
console.log(empAddress);
console.log("=======Array Destruct========");
var students = ["J&J", "pfizer", "Sputnik"];
console.log("Given Array is :".concat(students));
//array destructing
var First = students[0], Second = students[1], Third = students[2], _a = students[3], Forth = _a === void 0 ? "Covaxin" : _a;
console.log(First);
console.log(Second);
console.log(Third);
console.log(Forth);
//traverse for of is used 
console.log("traverse array=======>");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var i = students_1[_i];
    console.log(i);
}
