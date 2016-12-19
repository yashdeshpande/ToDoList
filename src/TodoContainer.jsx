import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.changeCheckBoxState = this.changeCheckBoxState.bind(this);

    this.state={
      todoItems: [{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      }]
    }
  }

  changeCheckBoxState(index){
    var self = this;
    var list = self.state.todoItems;
    list[index].checked = !list[index].checked;
    return function(){
      self.setState({
        todoItems: list
      });
    }
  }

  createItems(){
    var me = this;
    return this.state.todoItems.map(function(element,index){
      return <TodoItem
          title = {element.title}
          text = {element.text}
          checked = {element.checked}

        />
    });
  }

  render(){
    return (
      <div>
        {this.createItems()}
      </div>
    )

  }
}
