const createPassword = (name, age) => `${name}${age}`; //Arguments type

createPassword('Jack', 31);


const createPasswordStr = (name: string, age: number | string) => `${name}${age}`; // Multiple arguments type

createPasswordStr('Jack', 31);
createPasswordStr('Jack', '31');


const createPasswordDefaultPassword = (name: string = "Max", age: number | string = 20) => `${name}${age}`; // Default arguments type

createPasswordDefaultPassword();


const createPasswordRequired = (name, age) => `${name}${age}`; //Required arguments type

createPasswordRequired('Jack'); //An argument for 'age' was not provided

const createPasswordRequiredOptional = (name: string, age?: number) => `${name}${age}`;

createPasswordRequiredOptional('Jack');


const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;

const createSkillsTwo = (name: string, ...skills: Array<string>) =>
    `${name}, my skills are ${skills.join()}`;

createSkills('Jack', 'JS', 'ES6', 'React')


const greetUser: void = () => {
    alert("Hello, nice to see you!");
};

const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

const infiniteLoop = (): never => {
    while (true) {
    }
}




let myFunc;

function oldFunc(name: string): void {
    alert('Hello ${name}, nice to see you!');
}

myFunc = oldFunc;




let user: any = {
    name: 'Andre',
    age: 24,
}
user = 'test'; // now type of user is string



let list: Array<number> = [1,2,3]



let userTwo: {name: string, age: number} = {
    name: 'Andre',
    age: 24,
}
userTwo = 'test'; // Type 'string' is not assignable to type '{ name: string; age: number; }'.



let admin: {name: string, age: number, nickName: string} = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
}

type Person = {name: string, age: number, nickName?: string, getPass?: () => string};
let userThree: Person = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
}
let administrator: Person = {
    name: 'Yan',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`
    }
}
