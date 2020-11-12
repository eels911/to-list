import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

// получаем ивенты из пропсов
const TodoList =({todos,onDeleted,
  onToggleImportant,
                                  onToggleDone}) => {

    const elements= todos.map((item) => {
        const {id,...itemProps} = item
        // для каждого элемента массива создаем jsx элемент
        return (
        <li key= {id} className="list-group-item">
            <ToDoListItem {...itemProps}
            onDeleted = {() => onDeleted(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}/>
        </li>
        );
    });
     
    
    return (
      <ul className="list-group todo-list">
      {elements}
    </ul>
    );
  };

  export default TodoList;