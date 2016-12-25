import React, { Component } from 'react';
import {Row,Col,Button,Glyphicon,Checkbox} from 'react-bootstrap';
import {ContentEditable} from 'react-contenteditable';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.deleteTodoItemTrigger = this.deleteTodoItemTrigger.bind(this);
  }

deleteTodoItemTrigger(){
  console.log(this.props);
  this.props.deleteTodoItem(this.props.index);
}

  render(){

    return(
      <Row className="">
        <Col xs={8} md={8} lg={8}>
          <p className="Todo-item-title">{this.props.title}</p>
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
