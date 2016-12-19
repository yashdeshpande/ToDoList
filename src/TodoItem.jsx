import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';

export default class TodoItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Row className="">
        <Col xs={9} md={9} lg={9}>
          <p contentEditable="true">{this.props.title}</p>
        </Col>
        <Col xs={3} md={3} lg={3}>
          <input type="checkbox" onClick = {this.props.changeCheckBoxState()} checked={this.props.checked}/>
        </Col>
      </Row>
    )
  }

}
