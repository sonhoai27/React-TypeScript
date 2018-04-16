// import * as React from 'react'
// export interface InfoProps {
//     Name: string;
// }
// export default class Person extends React.Component<InfoProps, undefined> {
//     constructor(props: any){
//         super(props)
//     }
//
//     componentWillUpdate(nextProps:any,nextState:any){
//
//     }
//     componentDidUpdate(prevProps: any, prevState: any) {
//         if(this.props.Name !== prevProps.Name){
//             console.log("A: ")
//             console.log("New Props: ", this.props.Name)
//         }
//     }
//     componentWillReceiveProps(nextProps: any){
//         console.log("componentWillReceiveProps", nextProps.Name)
//     }
//     shouldComponentUpdate(nextProps:any, nextState:any) {
//         console.log(nextProps, nextState);
//         console.log(this.props, this.state);
//
//         return false;
//     }
//     render(){
//         return(
//             <div>
//                 {this.props.Name}
//             </div>
//         )
//     }
// }