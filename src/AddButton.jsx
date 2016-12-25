import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

export default class AddButton extends Component{

  constructor(props){
    super(props);

  }

  render(){

    return(
      <Button className="Add-button" bsStyle="info" onClick={this.props.reverseStateFunction}>
        <Glyphicon
          glyph="plus"
          className="Add-button-plus-sign"
          />
      </Button>
    )
  }

}
