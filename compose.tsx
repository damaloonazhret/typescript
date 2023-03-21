import {compose} from "redux";


function HOC1<WP>(WrappedComponent: ComponentType<WP & {hiphop: number}>) {
    return (props: WP) => {
        return <WrappedComponent{...props} hiphop={10}/>
    }
}


const f1 = (a: number) => 12
const f2 = (a: number) => 100

compose(
    f2, f1
)(18)

