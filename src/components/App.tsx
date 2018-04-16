import * as React from 'react'
import Notes from "./Notes";

export default class App extends React.Component<undefined,undefined>{
    constructor(props: any){
        super(props)
    }
    render(){
        return (
            <div>
                <div className="col-xs-4"></div>
                <div className="col-xs-4">
                    <h1>My Notes</h1>
                    <hr/>
                    <Notes/>
                </div>
                <div className="col-xs-4"></div>
            </div>
        )
    }
}