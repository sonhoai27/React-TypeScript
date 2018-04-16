import * as React from 'react'
import Form from "./Form";
import ItemList from "./ItemList";

export interface NoteState {
    isAdding: boolean,
    buttonName: string,
    NoteList: any,
    TempNoteList: any
}

export default class Notes extends React.Component<undefined,NoteState>{
    private keySearch: HTMLInputElement
    constructor(props:any){
        super(props)
        this.state = {
            NoteList: [
                    {
                        Name: "Hoc bai",
                        Content: "Hoc bai android"
                    },
                    {
                        Name: "Di",
                        Content: "CHoi game an uong"
                    },
                    {
                        Name: "vmkf",
                        Content: "CHoi game an uong"
                    },
                    {
                        Name: "ases",
                        Content: "CHoi game an uong"
                    },
                    {
                        Name: "hssssss",
                        Content: "CHoi game an uong"
                    },
                    {
                        Name: "lnnaa",
                        Content: "CHoi game an uong"
                    }
                ],
            isAdding: false,
            buttonName: "Add Note",
            TempNoteList: []
        }
    }

    handleClick(){
        this.setState({
            isAdding: !this.state.isAdding,
            buttonName: this.state.isAdding ? "Add Note" : "Hidden"
        })
    }

    addNote(obj:any){
        this.state.NoteList.push(obj)
        this.setState({
            NoteList: this.state.NoteList,
            isAdding: !this.state.isAdding,
            buttonName: this.state.isAdding ? "Add Note" : "Hidden"
        })
    }
    deleteNote(index:number){
        this.state.NoteList.splice(index, 1)
        this.setState({
            NoteList: this.state.NoteList
        })
    }
    search(){
        this.setState({
            TempNoteList: this.state.NoteList
        })
        var value = this.keySearch.value
        if(value!= ""){
            var result = this.state.NoteList.filter((item:any)=> {
                return item.Name == value
            })
            this.setState({
                NoteList: result
            })
        }else{
            this.setState({
                NoteList: this.state.TempNoteList,
                TempNoteList: []
            })
        }

    }
    restore(){
        if(this.keySearch.value == ""){
            this.setState({
                NoteList: this.state.TempNoteList,
            })
        }
    }
    render(){
        return(
            <div>
                <button className="btn btn-sm btn-primary" onClick={this.handleClick.bind(this)}>{this.state.buttonName}</button>
                <Form showOff={this.state.isAdding} add={this.addNote.bind(this)}/>
                <div className="search" style={{display: 'flex'}}>
                    <input type="text" placeholder="Lọc" ref={input => this.keySearch = input} onChange={this.restore.bind(this)}/>
                    <button onClick={this.search.bind(this)}>Filter</button>
                </div>
                <div className="list">
                    <ul>
                        <ItemList list={this.state.NoteList} delete={this.deleteNote.bind(this)}/>
                    </ul>
                </div>
            </div>
        )
    }
}