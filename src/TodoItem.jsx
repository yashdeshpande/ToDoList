import React, { Component } from 'react';
import {Row,Col,Button,Glyphicon,Checkbox} from 'react-bootstrap';
import ReactDOM from 'react-dom';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.deleteTodoItemTrigger = this.deleteTodoItemTrigger.bind(this);
    this.reverseStateFunction = this.reverseStateFunction.bind(this);
    this.changeTodoTrigger = this.changeTodoTrigger.bind(this);
    this.getTitleClass = this.getTitleClass.bind(this);
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

getTitleClass(){
  if(this.props.checked){
    console.log('yes');
    return 'Todo-item-title-struck';
  } else {
    return 'Todo-item-title';
  }
}

  render(){
    if(this.state.enlarged){
      return(
        <Row className="Todo-item-enlarged">
          <Col xs={1} md={1} lg={1} >
            <Button bsClass="Show-button" bsStyle="info" bsSize="small" onClick={this.reverseStateFunction}>
              <Glyphicon
                glyph="eye-close"
                />
            </Button>
          </Col>
          <Col xs={7} md={7} lg={7} >
            <div className="row">
              <input className="Todo-item-title" placeholder="Title" type="text" contentEditable="true" ref="todoTitle" defaultValue={this.props.title} onChange={this.changeTodoTrigger}></input>
            </div>
            <div className="row">
              <textArea className="Enlarged-textbox" placeholder="Description" ref="todoDescription" defaultValue={this.props.text} onChange={this.changeTodoTrigger}/>
            </div>
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
            <Button className="Show-button-container" bsClass="Show-button" bsStyle="info" bsSize="small" onClick={this.reverseStateFunction}>
              <Glyphicon
                glyph="eye-open"
                />
            </Button>
          </Col>
          <Col xs={7} md={7} lg={7} >
            <p onClick={this.reverseStateFunction} className={this.getTitleClass()}>{this.props.title}</p>
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
