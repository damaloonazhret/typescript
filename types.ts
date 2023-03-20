const isFetching: boolean = true;
const isLoading: boolean = false;


let int: number = 42; //же никак не переназначить на другой тип данных
const float: number = 4.2;
const num: number = 3e10;


const message: string = 'Hello TypeScript'


const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]


const words: string[] = ["hello", "typescript"]


//tupple
const contact: [string, number] = ['Vladilen', 12312312313]

//Any
let variable: any = 42
//...
variable = 'new string'


//===
function sayMyName(name: string): void { //void означает, что функция ничего нам не вернет
    console.log(name)
}

sayMyName('hisenbers')


//Never

function throwError(message: string) {
    throw new Error(message)
}

function infinite(): never { //бесконечный цикл, не запускать!!!!
    while (true) {

    }
}


//Type
type Login = string;

const login: Login = 'admin'
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'


type SomeType = string | null | undefined