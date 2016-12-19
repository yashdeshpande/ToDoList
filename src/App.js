import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './TodoContainer';
import {Row,Col} from 'react-bootstrap';



class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
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
