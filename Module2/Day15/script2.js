// This  is a file that contains task from task 21 to task 48

// employees array: An array of emplyees working in a department.
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

//departments array: An array of departments where emplyees work.
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//Task021: Can you filter employees who work in the "Engineering" department?

// const engineering = employees.filter((x) => x.departmentId == 2);
// const eng = employees.filter((x) => {
//   return x.departmentId == 2;
// });
// console.log(engineering);
// console.log(eng);

//Task022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

// const combined = employees.map((emp) => {
//   const dept = departments.find((dept) => emp.departmentId === dept.id);
//   console.log(dept);
//   return `${emp.name} (${dept.name})`;
// });

// console.log(combined);

// T-023: Find the highest salary among employees.

// const highestSalary = employees.reduce((max, emp) => {
//   if (emp.salary > max) {
//     max = emp.salary;
//   }
//   return max;
// }, 0);

// console.log(highestSalary);

//T-024: T-024: Check if there is at least one employee in the "Sales" department.

// const salesDept = departments.find((d) => d.name === "Sales");

// const hasSalesEmployee = employees.some(
//   (emp) => emp.departmentId === salesDept?.id,
// );

// console.log(hasSalesEmployee);

//T-025:Write a function to filter employees earning more than 6000.

// const filteredSal = employees.filter((emp) => {
//   return emp.salary > 6000;
// });
// console.log(filteredSal);

//T026: T-026: Create an array of employee names only.

// const empName = employees.map((emp) => {
//   return emp.name;
// });
// console.log(empName);

//T-027: Calculate the total salary of all employees using

// const totalSal = employees.reduce((acc, currentVal) => {
//   return acc + currentVal.salary;
// }, 0);

// console.log(totalSal);

//T-028: Is there any employee earning less than 5000?

// const checkSal = employees.some((emp) => emp.salary < 5000);
// console.log(checkSal);

//  T-029: Find the first employee who earns exactly 5100.

// const t29 = employees.find((emp) => emp.salary === 5100);

// console.log(t29);

//T-030: Find the last employee in the "HR" department.

// console.log(employees[employees.length - 1]);

// T-031: Find the first employee in the "Marketing" department.

// const t31 = employees.find((emp) => emp.departmentId === 4);
// console.log(t31);

// T-032: Check if all employees earn more than 4000.

// console.log(employees.every((emp) => emp.salary > 4000));

//T-033: Find the first employee in the "Sales" and "HR" department.

// const HRid = departments.find((dept) => dept.name === "HR").id;
// const SalesId = departments.find((dept) => dept.name === "Sales").id;

// const firstHR = employees.find((emp) => emp.departmentId === HRid);
// const firstSales = employees.find((emp) => emp.departmentId === SalesId);

// console.log(firstHR);
// console.log(firstSales);

//T-034: Verify if all employees belong to a department listed in the departments array.

// const t34 = employees.every((emp) => {
//   return departments.some((dept) => emp.departmentId === dept.id);
// });

// console.log(t34);

//T-035: Log each employee's name and department name to the console.

// const t35 = employees.map((emp) => {
//   const dept = departments.find((d) => d.id === emp.departmentId);
//   return emp.name + " - " + dept.name;
// });

// console.log(t35);

//T-036: Extract all employee names into a single array.

// const t36 = employees.map((emp) => emp.name);
// console.log(t36);

//T-037: Increment each employee's salary by 10%

// const t37 = employees.map((emp) => ({
//   ...emp,
//   salary: emp.salary * 1.1,
// }));

// console.log(t37);

//T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

// const empSkill = [
//   { name: "Alex", skills: ["Excel", "Management"] },
//   {
//     name: "Jane",
//     skills: ["Sales", "Engineering"],
//   },
//   {
//     name: "Helen",
//     skills: ["Marketing", "Engineering"],
//   },
// ];

// const flatEmpSkill = empSkill.map((emp) => emp.skills).flat();
// console.log(flatEmpSkill);

// T-039: Find the total salary of all employees working in the "Engineering" department.

// const engId = departments.find((dept) => dept.name == "Engineering").id;
// console.log(engId);

// const totalSal = employees
//   .filter((emp) => emp.departmentId == engId)
//   .reduce((sum, currentVal) => {
//     return sum + currentVal.salary;
//   }, 0);

// console.log(totalSal);

// T-040: Check if there is any department where all employees earn more than 5000.

// const hasHighPayingDept = departments.some((dept) => {
//   const deptEmployees = employees.filter((emp) => emp.departmentId === dept.id);
//   return (
//     deptEmployees.length > 0 && deptEmployees.every((emp) => emp.salary > 5000)
//   );
// });

// console.log(hasHighPayingDept);

//T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

// const projectArr = [
//   { name: "Alex", skills: ["Project A", "Project B", "Project C"] },
//   {
//     name: "Bob",
//     skills: ["Project A", "Project D", "Project E"],
//   },
//   {
//     name: "Helen",
//     skills: ["Project K", "Project D", "Project B"],
//   },
// ];

// const uniqueSkill = new Set(
//   projectArr.map((projectArr) => projectArr.skills).flat(),
// ).size;
// console.log(uniqueSkill);

// T-042: For each employee, find their department name and return an array of employee names with their department names.

// const t42 = employees.map((emp) => {
//   const dept = departments.find((dept) => dept.id === emp.departmentId);
//   return new Array(emp.name, dept.name);
// });
// console.log(t42);

//T-043: Get a list of names of employees earning more than 6000.

// const t43 = employees.filter((emp) => emp.salary > 6000).map((emp) => emp.name);

// console.log(t43);

//T-044: T-044: Write a for-of loop to print the names of all employees from the employees array.

// for (let emp of employees) {
//   console.log(emp.name);
// }

//T-045: Using a for-of loop, print the names of employees earning more than 5000.

// for (let emp of employees) {
//   if (emp.salary > 5000) {
//     console.log(emp.name);
//   }
// }

//T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

for (let { name, salary } of employees) {
  console.log(name + " " + salary);
}

//T-047: Write a for-of loop to match employees with their departments and print the results.

for (let emp of employees) {
  for (let dept of departments) {
    if (emp.departmentId === dept.id) {
      console.log(`${emp.name} works in ${dept.name}`);
    }
  }
}

//T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

for (let [index, employee] of employees.entries()) {
  console.log(`Index ${index}: ${employee.name}`);
}
