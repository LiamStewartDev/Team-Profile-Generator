const Intern = require('../lib/Intern');

describe("Methods", () => {
    const school = 'UC Berkeley';
    test('will we get the correct school when calling the method getSchool()', () => {
        const intern = new Intern('Liam', 2, 'test@gmail.com', school)
        expect(intern.getSchool()).toBe(school);
    })

    test('will we get the correct role when calling getRole()', () => {
        const intern = new Intern('Liam', 2, 'test@gmail.com', school)
        expect(intern.getRole()).toBe("Intern");
    })
})