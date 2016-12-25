import React, { Component } from 'react';
import {Row,Col,Button,Glyphicon,Checkbox} from 'react-bootstrap';
import {ContentEditable} from 'react-contenteditable';
import ReactDOM from 'react-dom';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.deleteTodoItemTrigger = this.deleteTodoItemTrigger.bind(this);
    this.reverseStateFunction = this.reverseStateFunction.bind(this);
    this.changeTodoTrigger = this.changeTodoTrigger.bind(this);
    this.state = {
      enlarged: false
    }
  }
reverseStateFunction(){
  this.setState({
    enlarged: !this.state.enlarged
  })
}

deleteTodoItemTrigger(){
  this.props.deleteTodoItem(this.props.index);
}
changeTodoTrigger(){
  var _title = ReactDOM.findDOMNode(this.refs.todoTitle).value;
  var _description = ReactDOM.findDOMNode(this.refs.todoDescription).value;
  this.props.onTodoChange(this.props.index,_title,_description)
  console.log(_title,_description);
}

  render(){
    if(this.state.enlarged){
      return(
        <Row className="Todo-item-enlarged">
          <Col xs={1} md={1} lg={1} >
            <Button bsClass="View-button" bsStyle="info" bsSize="small" onClick={this.reverseStateFunction}>
              <Glyphicon
                glyph="eye-close"
                />
            </Button>
          </Col>
          <Col xs={7} md={7} lg={7} >
            <input type="text" contentEditable="true" ref="todoTitle" defaultValue={this.props.title} onChange={this.changeTodoTrigger} className="Todo-item-title"></input>
            <textArea ref="todoDescription" defaultValue={this.props.text} onChange={this.changeTodoTrigger}/>
          </Col>
          <Col xs={1} md={1} lg={1} xsOffset={2} mdOffset={2} lgOffset={2}>
            <Checkbox onClick ={this.props.changeCheckBoxState} checked={this.props.checked}/>
          </Col>
          <Col xs={1} md={1} lg={1}>
            <Button bsClass="Delete-button" bsStyle="info" bsSize="small" onClick={this.deleteTodoItemTrigger}>
              <Glyphicon
                glyph="trash"
                />
            </Button>
          </Col>
        </Row>
      )
    } else {
      return(
        <Row className="Todo-item-small">
          <Col xs={1} md={1} lg={1} >
            <Button bsClass="View-button" bsStyle="info" bsSize="small" onClick={this.reverseStateFunction}>
              <Glyphicon
                glyph="eye-open"
                />
            </Button>
          </Col>
          <Col xs={7} md={7} lg={7} >
            <p onClick={this.reverseStateFunction} className="Todo-item-title">{this.props.title}</p>
          </Col>
          <Col xs={1} md={1} lg={1} xsOffset={2} mdOffset={2} lgOffset={2}>
            <Checkbox onClick ={this.props.changeCheckBoxState} checked={this.props.checked}/>
          </Col>
          <Col xs={1} md={1} lg={1}>
            <Button bsClass="Delete-button" bsStyle="info" bsSize="small" onClick={this.deleteTodoItemTrigger}>
              <Glyphicon
                glyph="trash"
                />
            </Button>
          </Col>
        </Row>
      )
    }

  }

}
