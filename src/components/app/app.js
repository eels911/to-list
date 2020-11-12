
import React, { Component } from 'react'

import AppHeader from '../app-header';
import SerachPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class  App extends Component {
 
  maxId = 100;

  state = {
    todoData: [  
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have Breakfast'),
      this.createTodoItem('Go to Zavod')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const  after = todoData.slice(idx + 1);

      const newArray = [
        ...before,...after
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = 
      this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArr
      };
    });
  };
  onToggleImportant = (id) => {
    console.log('Toggle important', id);
  };

  toggleProperty(arr,id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
     // 1. update object
        const oldItem =  todoData[idx]
        const newItem = {... oldItem,
          done: !oldItem.done}
      // 2. construct new array

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ... todoData.slice(idx + 1)
      ];
      // возвращаем новый стэйт
      return {
        todoData: newArray
      };
  }
  onToggleDone = (id) => {
      this.setState(({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
     // 1. update object
        const oldItem =  todoData[idx]
        const newItem = {... oldItem,
          done: !oldItem.done}
      // 2. construct new array

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ... todoData.slice(idx + 1)
      ];
      // возвращаем новый стэйт
      return {
        todoData: newArray
      };
      });
  }
  render() {

    const { todoData } = this.state;
    const doneCount = todoData
                          .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return(
      <div class="todo-app">
      <AppHeader toDo={todoCount} done={doneCount}/>
      <div className="top-panel d-flex">
        <SerachPanel/>
        <ItemStatusFilter/>
      </div>
      

      {/* todolist получает ивенты */}
      <TodoList
        todos={this.state.todoData}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}/>

        <ItemAddForm onItemAdded={this.addItem}/>
    </div>
    );
  }
}

