namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass('Andrew', 31);
const isSecret = Utils.isEmpty(Utils.SECRET);

const PI = 3;