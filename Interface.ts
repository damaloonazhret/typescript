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

const initial = {
    age: 10,
    name: 'Dimych',
    photo: null as PhotoType | null //воспринимай null как ффототайп
}

type StateType = typeof initial // создали клон целого initial

const reducer = (state = initial, action: any) => {

    state.photo = {
        large: '',
        small: '',
    }
    state.age = 12
    return state
}