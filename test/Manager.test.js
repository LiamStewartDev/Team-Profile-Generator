const Manager = require('../lib/Manager');

describe("Methods", () => {
    
    test('will we get the correct office number when calling the method getOfficeNumber()', () => {
        const officeNumber = '5';
        const manager = new Manager('Liam', 2, 'test@gmail.com', officeNumber)
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    })

    test('will we get the correct role when calling getRole()', () => {
        const manager = new Manager('Liam', 2, 'test@gmail.com', '1')
        expect(manager.getRole()).toBe("Manager");
    })
})