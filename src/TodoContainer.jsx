import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import AddButton from './AddButton.jsx';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.changeCheckBoxState = this.changeCheckBoxState.bind(this);
    this.createItems = this.createItems.bind(this);

    this.state={
      todoItems: [{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: false
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: false
      },{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      }]
    }
  }

  changeCheckBoxState(index){
    var self = this;

    return function(){
      var list = self.state.todoItems;
      list[index].checked = !list[index].checked;
      self.setState({
        todoItems: list
      });
    }
  }
  createAddButton(){
    var me = this;
    return (
      <AddButton

        />
    )
  }
  createItems(){
    var me = this;
    return this.state.todoItems.map(function(element,index){
      return <TodoItem
          title = {element.title}
          text = {element.text}
          checked = {element.checked}
          key={index}
          changeCheckBoxState = {me.changeCheckBoxState(index)}
        />
    });
  }

  render(){
    return (
      <div>
        {this.createItems()}
        {this.createAddButton()}
      </div>
    )

  }
}
