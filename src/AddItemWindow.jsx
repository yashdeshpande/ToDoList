import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormControl,Button,Glyphicon} from 'react-bootstrap';

export default class AddItemWindow extends Component {

  constructor(props){
    super(props);
    this.addNewTodoItemTrigger=this.addNewTodoItemTrigger.bind(this);
    this.state = {
      titleValue: '',
      descriptionValue: ''
    };
  }

  addNewTodoItemTrigger(){
    var _title = ReactDOM.findDOMNode(this.refs.titleValue).value;
    var _description = ReactDOM.findDOMNode(this.refs.descriptionValue).value;
    this.props.addNewTodoItem(_title,_description);
  }

  render(){
    return (
      <div>
        <div>
          <Button onClick={this.props.reverseStateFunction}>
            <Glyphicon
              glyph = "remove"
              />
          </Button>
        </div>
        <div>
          <form>
            <FormControl
              placeholder="Title"
              ref='titleValue'
              />
            <FormControl
              placeholder="Description"
              ref='descriptionValue'
              />
            <Button onClick={this.addNewTodoItemTrigger}>
                <Glyphicon
                  glyph = "plus"
                  />
            </Button>

          </form>

        </div>
      </div>
    )
  }

}
