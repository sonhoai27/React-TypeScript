import * as React from 'react'

export interface ListProps {
    list: any,
    delete:any
}
let isShow = false
export default class ItemList extends React.Component<ListProps, undefined>{
    constructor(props:any){
        super(props)
    }
    delete(index:any){
        this.props.delete(index)
    }
    edit(){

    }
    render(){
        const formEdit = (
            <div>
                <input type="text"/>
                <input type="text"/>
            </div>
        )
        return(
            <div>
                {this.props.list.map((e:any, i:any)=> {
                    return (<li key={i}>
                        {<p>{e.Name} - {e.Content}</p>}
                        <button onClick={this.delete.bind(this, i)}>Xóa</button>
                        <button onClick={this.edit.bind(this, i)}>Sửa</button>
                    </li>)
                })}
            </div>
        )
    }
}