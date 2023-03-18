class User {
    static secret = 12345;

    constructor(public name: string, public age: number) {
    }
}


class Andrey extends User {
    name: string = 'Andrey'

    constructor(age: number) {
        super(name, age);
    }
}

const max = new User('max',20);
const andrey = new Andrey(24)