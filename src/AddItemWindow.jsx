import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormControl,Button,Glyphicon,Col,Row} from 'react-bootstrap';

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
      <div className="Add-item-window">
        <Row className="Add-item-menu-bar">
          <Col xs={2} md={2} lg={2} xsOffset={10} mdOffset={10} lgOffset={10}>
            <Button className="Close-button" onClick={this.props.reverseStateFunction}>
              <Glyphicon
                glyph = "remove"
                className="Close-glyph"
                />
            </Button>
          </Col>
        </Row>
        <div>
          <form>
            <FormControl
              placeholder="Title"
              ref='titleValue'
              />
            <FormControl
              placeholder="Description"
              ref='descriptionValue'
              className="Add-description-text"
              />
            <Col xs={12} md={12} lg={12} className="Submit-button-container">
              <Button className="Submit-button" onClick={this.addNewTodoItemTrigger}>
                  <Glyphicon
                    glyph = "plus"
                    />
              </Button>
            </Col>

          </form>

        </div>
      </div>
    )
  }

}
