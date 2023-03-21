type UserType = {
    firstName: string
    lastName: string
    age: number
}

type PhotoType = {
    large: string
    small: string
}

type ServerResponseType<D> = {  //D - дженерик
    errorCode: number
    messages: Array<string>
    data: D
}

const response1: ServerResponseType<UserType> = {  // в <> передаем нужный парамент и он подставляется в D
    errorCode: 1,
    messages: ['it', 'kamasutra'],
    data: {
        firstName: 'Dmitry',
        lastName: 'Kuzyuberdin',
        age: 32
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['it', 'kamasutra'],
    data: {
        large: 'https://it-iasdfaslkdf.as/1.jpg',
        small: 'https://it-iasdfaslkdf.as/1.jpg',
    }
}

type Nullable<MainType> = null | MainType // можно писать не одну букву, а что хочешь, то, что передастся в ,. попадет в мэйнтайп

const initial = {
    age: 10,
    name: 'Dimych',
    user: null as Nullable<UserType>,  // можно и так, и так, как угождно можно)
    photo: null as PhotoType | null //воспринимай null как ффототайп
}

type StateType = typeof initial // создали клон целого initial

type ActionsTypes = ReturnType<typeof AC1> | ReturnType<typeof AC2>

const reducer = (state = initial, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-AGE':
            return {...state, age: action.age}
        case 'SET-NAMES':
            return {...state, name: action.firstName + ' ' + action.lastName}
    }

    state.photo = {
        large: '',
        small: '',
    }
    state.age = 12
    return state
}

// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never //infer записать этот тип в переменную R


const obj = {
    a: {name: 'Dimych'},
    b: {age: 33},
    c: {site: {title: 'asdf.com'}}
}

// type SomeType = typeof  obj.a | typeof obj.b | typeof obj.c
type SomeType<T> = T extends {[key: string]: infer U} ? U : never // infer додумай это значение

let hipHop: ReturnType<PropertiesType<typeof actions>> = {type: 'SET-AGE'}


const actions = {
    AC1: (age: number) => ({type: 'SET-AGE', age} as const), // сделали этот тип как константу и благодаря этому уже не ошибешься в экшене с типом, будет только setage
    AC2: (firstName: string, lastName: string) => ({type: 'SET-AGE', firstName, lastName} as const)
}




// const action: AC1Type = {type: "SET-AGE", age: 21}

type HipHop<T> = T extends 'user' ? UserType :
    T extends  'photo' ? PhotoType : number


    let a: HipHop<'user' | 'photo'> = {
        firstName: 'Dmitry',
        lastName: 'Kuzyuberdin',
        age: 32
    }
    let b: HipHop<'photo'> = {
        large: 'https://it-iasdfaslkdf.as/1.jpg',
        small: 'https://it-iasdfaslkdf.as/1.jpg',
    }