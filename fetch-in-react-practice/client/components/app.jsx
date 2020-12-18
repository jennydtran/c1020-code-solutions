import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => this.setState(state => ({
        todos: todos
      }))
      );
  }

  addTodo(newTodo) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };

    fetch('/api/todos', requestOptions)
      .then(response => response.json())
      .then(newTodo => {
        const newTodosArray = this.state.todos.concat(newTodo);
        this.setState({
          todos: newTodosArray
        });
      });
  }

  toggleCompleted(todoId) {
    const oldTodos = this.state.todos;
    let index;
    for (let i = 0; i < oldTodos.length; i++) {
      if (oldTodos[i].todoId === todoId) {
        index = i;
      }
    }
    const isCompletedStatus = oldTodos[index].isCompleted;
    const newStatus = {
      isCompleted: !isCompletedStatus
    };

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStatus)
    };

    fetch(`/api/todos/${todoId}`, requestOptions)
      .then(response => response.json())
      .then(updatedTodo => {
        const todos = this.state.todos;
        todos[index] = updatedTodo;
        this.setState({ todos: todos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
