var employee={
    emp_id:13,
    emp_name:"xyz",
    emp_salary:40000,
    emp_address:"abc"
}
console.log(employee);
//traverse for in loop is used
console.log("========object traverse==========");
for(const key in employee){
    console.log(key);
    console.log(employee[key]);   
}
//destructuring
console.log("object Destructing=====>");
var {emp_id:userid, emp_name:username,emp_salary:empsalary,emp_address:empAddress}=employee;
console.log(userid);
console.log(username);
console.log(empsalary);
console.log(empAddress);
console.log("=======Array Destruct========");
var students=["J&J","pfizer","Sputnik"];
console.log(`Given Array is :${students}`);
//array destructing
let[First,Second,Third,Forth="Covaxin"]=students;
console.log(First);
console.log(Second);
console.log(Third);
console.log(Forth);
//traverse for of is used 
console.log("traverse array=======>");
for(const i of students){
console.log(i);
}











