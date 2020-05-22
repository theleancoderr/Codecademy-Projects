import { employee, cadre, tax, benefits, bonus, reimbursement} from './employee';
function getEmployeeInformation(inputSalary) {
 employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(20000);
getEmployeeInformation(80000);
getEmployeeInformation(30000);