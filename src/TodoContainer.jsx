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
    this.onTodoChange = this.onTodoChange.bind(this);
    if(!localStorage.todoItems){
      localStorage.todoItems = '[]'
    }
    this.state={
      todoItems: JSON.parse(localStorage.todoItems),
      showAddWindow: false
    };
  }

  changeCheckBoxState(index){
    var self = this;

    return function(){
      var list = self.state.todoItems;
      list[index].checked = !list[index].checked;
      localStorage.todoItems = JSON.stringify(list);
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
    localStorage.todoItems = JSON.stringify(_todoItems);
    this.setState(
      {
        todoItems: _todoItems,
        showAddWindow: !this.state.showAddWindow
      }
    );
  }
  deleteTodoItem(index){
    var _todoItems = this.state.todoItems;
    _todoItems.splice(index,1);
    localStorage.todoItems = JSON.stringify(_todoItems);
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
    return (
      <AddButton
        reverseStateFunction = {this.reverseStateFunction}
        />
    );
  }
  onTodoChange(index,title,text){
    var _todoItems = this.state.todoItems;
    _todoItems[index].title=title;
    _todoItems[index].text=text
    console.log(_todoItems);
    localStorage.todoItems = JSON.stringify(_todoItems);
    this.setState({
      todoItems: _todoItems
    })

  }
  createTodoItems(){
    var me = this;
    if(this.state.todoItems){
    return this.state.todoItems.map(function(element,index){
      return <TodoItem
          title = {element.title}
          text = {element.text}
          checked = {element.checked}
          deleteTodoItem = {me.deleteTodoItem}
          key={index}
          index={index}
          changeCheckBoxState = {me.changeCheckBoxState(index)}
          onTodoChange = {me.onTodoChange}
        />
    });
  } else {
    return (
      <div>
        <p>Nothing to render!</p>
      </div>

    )
  }
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
      <div className="Todo-container">
          {this.createItems()}
      </div>
    )

  }
}
