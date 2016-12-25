import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';
import AddButton from './AddButton.jsx';
import AddItemWindow from './AddItemWindow.jsx';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.changeCheckBoxState = this.changeCheckBoxState.bind(this);
    this.createTodoItems = this.createTodoItems.bind(this);
    this.createAddItemWindow = this.createAddItemWindow.bind(this);
    this.createAddButton = this.createAddButton.bind(this);
    this.reverseStateFunction = this.reverseStateFunction.bind(this);
    this.addNewTodoItem = this.addNewTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.state={
      todoItems: [{
        title: 'Wash Dishes',
        text: 'Do em',
        checked: true
      },{
        title: 'Clean Living Room',
        text: 'Do em',
        checked: false
      },{
        title: 'Hunt for Jobs',
        text: 'Do em',
        checked: true
      },{
        title: 'Paint the car',
        text: 'Do em',
        checked: false
      },{
        title: 'Compose a new symphony',
        text: 'Do em',
        checked: true
      }],
      showAddWindow: false
    };
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
  addNewTodoItem(newTitle,newText){
    var _todoItems = this.state.todoItems;
    _todoItems.push(
      {
        title: newTitle,
        text: newText,
        checked: false
      }
    );
    this.setState(
      {
        todoItems: _todoItems,
        showAddWindow: !this.state.showAddWindow
      }
    );
  }
  deleteTodoItem(index){
    console.log(index);
    var _todoItems = this.state.todoItems;
    _todoItems.splice(index,1);
    console.log(_todoItems);
    this.setState({todoItems: _todoItems});
  }

  createAddItemWindow(){
    var me =this;
    return (
      <AddItemWindow
        reverseStateFunction={this.reverseStateFunction}
        addNewTodoItem={this.addNewTodoItem}
        />
    )
  }
  reverseStateFunction(){
    this.setState({showAddWindow: !this.state.showAddWindow});
  }
  createAddButton(){
    var me = this;
    return (
      <AddButton
        reverseStateFunction = {this.reverseStateFunction}
        />
    );
  }
  createTodoItems(){
    var me = this;
    return this.state.todoItems.map(function(element,index){
      return <TodoItem
          title = {element.title}
          text = {element.text}
          checked = {element.checked}
          deleteTodoItem = {me.deleteTodoItem}
          key={index}
          index={index}
          changeCheckBoxState = {me.changeCheckBoxState(index)}
        />
    });
  }

  createItems(){
    var me = this,
      items =[];
    items.push(me.createTodoItems());
    if(this.state.showAddWindow){
      items[1] = me.createAddItemWindow();
    } else {
      items.push(me.createAddButton());
    }
    return items;
  }

  render(){
    return (
      <div>
          {this.createItems()}
      </div>
    )

  }
}
