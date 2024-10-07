const employee = {
    name: 'Alex',
    streetAddress: {
        street: {
            line1: '11 Broadway',
            line2: '2nd Floor',
        },
        city: 'New York',
        state: 'NY',
        zipCode: '10004'
    }
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee
}