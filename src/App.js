import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './TodoContainer';
import {Row,Col,Glyphicon} from 'react-bootstrap';




class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Row className="Todo-logo">
          <Col xs={4} md={4} lg={4} xsOffset={4} mdOffset={4} lgOffset={4}>
            <Glyphicon
              glyph="tasks"
              />
          </Col>
          <Col className="Simple-todo-container" xs={4} md={4} lg={4} xsOffset={4} mdOffset={4} lgOffset={4}>
          <label className="Simple-todo">SimpleTodo</label>
          </Col>
        </Row>
        <Row>
          <Col xs={8} md ={8} xsOffset={2} mdOffset={2}>
            <TodoContainer />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
