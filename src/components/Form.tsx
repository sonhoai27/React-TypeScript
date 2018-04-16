import * as React from 'react'

export interface FormProps{showOff: boolean, add:any}
export interface FormState {
    status: boolean
}

export default class Form extends React.Component<FormProps,FormState>{
    private nameInput: HTMLInputElement
    private contentInput: HTMLInputElement
    constructor(props: any){
        super(props)
        this.state = {
            status: false
        }
    }
    add(e:any){
        e.preventDefault()
        this.props.add({Name:this.nameInput.value, Content:this.contentInput.value})
        this.nameInput.value = ""
        this.contentInput.value = ""
    }
    edit(obj:any){
        if(obj){
            this.setState({

            })
        }
    }
    render(){
        return(
            <div style={{display: this.props.showOff ? 'block' : 'none'}}>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input type="text" className="form-control" ref={name => this.nameInput = name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Content:</label>
                        <input type="text" className="form-control" ref={content => this.contentInput = content}/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={!this.state.status ? this.add.bind(this) : this.edit.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}