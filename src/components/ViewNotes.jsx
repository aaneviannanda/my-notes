import React from "react";
import { InputNotes } from "./InputNotes";
import { HasilNotes } from "./HasilNotes";
import { getInitialData } from "../utils";
import autoBind from "auto-bind";

export class ViewNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      statusNotes: "note",
      search: "",
      newData: {
        title: "",
        body: "",
      },
      maxLengthTitle: 50,
      maxLengthBody: 225,   
    };

    autoBind(this);
  }


//   Fungsi detele note
  deleteNote(id) {
    const data = this.state.data;
    const note = data.filter((item) => item.id !== id);
    this.setState({ data: note });
  }
//   Fungsi pindah note
  changeArchiveStatus(id){
    this.setState((prevData) => {
        const data = prevData.data;
        const result = data.map((item) => item.id === id ? {...item, archived: !item.archived} : item)
        return{
            data: result
        }
    });
  }
//   Change status Note
  changeStatusNotes(newStatusNotes){
    this.setState({statusNotes: newStatusNotes })
  }
//  Fungsi serach
  searchNote(value){
    console.log(value);
    this.setState((prevData) => {
        return{
            ...prevData,
            search: value,
        }
    });
  }
// Input note
    onTitleChange(value) {
        this.setState((prevData) => {
        return {
            maxLengthTitle: 50 - value.slice(0, 50).length,
            newData: {
            ...prevData.newData,
            title: value.length < 50 ? value : value.slice(0, 50),
            },
        };
        });
    }

  onBodyChange(value) {
    this.setState((prevData) => {
      return {
        maxLengthBody: 225 - value.slice(0, 225).length,
        newData: {
          ...prevData.newData,
          body: value.length < 225 ? value : value.slice(0, 225),
        },
      };
    });
  }

  onSubmitNote(event) {
    event.preventDefault();

    const data = this.state.data;
    const newData = this.state.newData;
    const title = newData.title;
    const body = newData.body;
    // this.setState({ maxLengthTitle: 50, maxLengthBody: 225 });

    this.setState({
      data: [
        ...data,
        {
          id: +new Date(),
          title: title,
          body: body,
          archived: false,
          createdAt: new Date().toISOString(),
        }
      ],
      maxLengthTitle: 50,
      maxLengthBody: 225,
    });

    this.setState((prevData) => {
      return {
        newData: {
          ...prevData.newData,
          title: "",
          body: "",
        }
      }
    });
  }

  render() {
    return (
      <div className="grid grid-cols-2 gap-10 font-poppins px-6">
        <InputNotes 
            newData={this.state.newData}
            maxLengthTitle={this.state.maxLengthTitle}
            maxLengthBody={this.state.maxLengthBody}
            onTitleChange={this.onTitleChange}
            onBodyChange={this.onBodyChange}
            onSubmitNote={this.onSubmitNote}
        />
        <HasilNotes
          data={this.state.data}
          statusNotes={this.state.statusNotes}
          onDelete={this.deleteNote}
          onChangeArchiveStatus={this.changeArchiveStatus}
          onChangeStatusNotes={this.changeStatusNotes}
          search={this.state.search}
          onSearch={this.searchNote}
        />
      </div>
    );
  }
}
