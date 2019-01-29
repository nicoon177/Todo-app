import React, { Component } from 'react';
import './App.css';

import faker from 'faker';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      startDate: null,
      todos: [
        { id: 1, text: 'Some text for first todo', complited: false, date: new Date().toDateString() },
        { id: 2, text: 'Some text for second todo', complited: false, date: null }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  addTask = (e) => {
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
  }

  changeInput = (e) => {
    e.preventDefault();
    this.setState({userInput: e.target.value})
  }

  counterTasks = () => {
    return this.state.todos.length
  }

  complitedTodo = (index) => {
    const todos = this.state.todos;
    todos[index].complited = !todos[index].complited;
    this.setState({ todos })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        The todo App
        <div>
        <input
          onChange={this.changeInput}
          value={this.state.userInput} 
        />
        </div>
        <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Click to select a date"
          minDate={new Date()}
          isClearable={true}
          inline
        />
        </div>
        <div>
        <button
          disabled={this.state.userInput.length <= 3}
          onClick={this.addTask} 
        >
          Add
        </button>
        </div>
        <p>{this.counterTasks()}</p>
        {this.state.todos.map((item, index) => {
          return (
            <div key={index}>
              <p
                style={{textDecoration: item.complited ? "line-through" : 'none' }}
                onClick={() => this.complitedTodo(index)}
              >{item.text} date => {item.date}</p>
              <button onClick={() => this.deleteTodo(item.id)}>delete</button>
            </div>
          )
        } )}
      </div>
    );
  }
}

export default App;
