import React, { Component } from 'react';
import './App.css';

import faker from 'faker';
import moment from 'moment';

import ButtonComponent from './components/Button';
import InputComponent from './components/Input';
import DatePickerComponent from './components/DatePicker';
import TodosList from './components/TodosList';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      startDate: new Date(),
      todos: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.complitedTodo = this.complitedTodo.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  addTask(e) {
    e.preventDefault();

    let newTime = moment();
    let endOfTime = moment(this.state.startDate);
    let restTime = endOfTime.from(newTime);

    const newTodo = {
      id: faker.random.uuid(),
      text: this.state.userInput,
      compited: false,
      date: restTime
    }

    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos,
      userInput: '',
      startDate: new Date()
    })


    localStorage.setItem('Tasks', JSON.stringify(todos));
  }

  changeInput = (e) => {
    e.preventDefault();
    this.setState({userInput: e.target.value})
  }

  counterTasks = () => {
    return this.state.todos.length
  }

  complitedTodo(index) {
    const todos = this.state.todos;
    todos[index].complited = !todos[index].complited;
    this.setState({ todos })

    localStorage.setItem('Tasks', JSON.stringify(todos));
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos
    })

    localStorage.setItem("Tasks", JSON.stringify(todos));
  }

  disableButton() {
    if(this.state.userInput.length <= 3) {
      return true;
    }
    return false
  }

  componentDidMount() {
    let value = localStorage.getItem("Tasks");
    let todos = JSON.parse(value);
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className='App'>

        <Header countTodos={this.counterTasks()} />
      
        <div className="todoContainer">
          <InputComponent
            change={this.changeInput}
            value={this.state.userInput}
          />
          <DatePickerComponent startDate={this.state.startDate} handleChange={this.handleChange} />
          <ButtonComponent
            display={this.disableButton}
            addTask={this.addTask} 
          />
        </div>

        <TodosList todos={this.state.todos} delete={this.deleteTodo} handleClick={this.complitedTodo} />

      </div>
    );
  }
}

export default App;
