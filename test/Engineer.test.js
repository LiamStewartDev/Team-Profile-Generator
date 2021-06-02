const Engineer = require('../lib/Engineer');

describe("Methods", () => {
    const github = 'user';
    test('will we get the correct github when calling the method getGithub()', () => {
        const engineer = new Engineer('Liam', 2, 'test@gmail.com', github)
        expect(engineer.getGithub()).toBe(github);
    })

    test('will we get the correct role when calling getRole()', () => {
        const engineer = new Engineer('Liam', 2, 'test@gmail.com', github)
        expect(engineer.getRole()).toBe("Engineer");
    })
})