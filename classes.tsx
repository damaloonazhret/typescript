class User {
    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }

}

const andrey = new User('Andrey', 24, 'wevDev', 123123);

andrey.name;
andrey.nickName;
andrey.age;
andrey.pass = 42;


class UserTwo {
    name: string;
    age: number = 20;
    nickName: string = 'webDeb';

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName}${this.age}`;
    }

    const
    userM = new UserTwo('andrey')

    userM
.

    getPass();
}


class UserConstructor { //в таком случае для всех случаев необходимо указывать модификатор
    constructor(
        public name: string,
        public nickName: string,
        public age: number,
        public pass: number,
    ) {
    }
}



class UserPrivate {
    private age: number = 20;

    constructor(public name: string) {
    }

    setAge(age: number) {} //вызов метода

    set myAge(age: number) { //вызов свойства
    this.age = age;
    }
}

const andr = new UserPrivate('Andrey');

andr.age = 30; //Property 'age' is private and only accessible within class 'UserPrivate'.
andr.setAge(11) //11
andr.myAge = 12; //12