const employee = {
    name : "john doe",
    streetAddress : "Fortworth Dallas"
};
function updateEmployeeWithKeyAndValue(employee,key,val){
   return {...employee ,[key]:val}   
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;
}
newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Allan wilson")
function  deleteFromEmployeeByKey(employee,key){
    const cloneEmployee = {...employee};
    delete cloneEmployee.name;
    return cloneEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name;
   return employee;
}

