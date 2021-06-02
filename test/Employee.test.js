const Employee = require('../lib/Employee');

describe('methods', () => {
    const name = "Liam";
    const id = 1;
    const email = "test@test.com";
    const role = "Employee"
    test('can we get the name of the employee by calling getName()', () => {
        const employee = new Employee(name, id, email)
        expect(employee.getName()).toBe(name);
    })
    test('can we get the id of the employee by calling getId()', () => {
        const employee = new Employee(name, id, email)
        expect(employee.getId()).toBe(id);
    })
    test('can we get the email of the employee by calling getEmail()', () => {
        const employee = new Employee(name, id, email)
        expect(employee.getEmail()).toBe(email);
    })
    test('can we get the role of the employee by calling getRole()', () => {
        const employee = new Employee(name, id, email)
        expect(employee.getRole()).toBe(role);
    })
})