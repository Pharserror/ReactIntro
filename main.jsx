import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{ text: 'I am a task' }]
    };
  }

  componentWillMount() {
    debugger;
  }

  componentDidMount() {
    debugger;
  }

  componentWillReceiveProps() {
    debugger;
  }

  componentWillUpdate(nextProps) {
    debugger;
  }

  componentDidUpdate() {
    debugger;
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;
  }

  getTasks() {
    /*
    Challenge!
    Make tasks their own components such that you're pushing a <Task> onto the array
    instead of an <li>
    */
    let nodes = [];
    this.state.tasks.forEach((task) => {
      nodes.push(
        <li>{ task.text }</li>
      );
    });
    return nodes;
  }

  addTask(event) {
    this.setState(
      {
        tasks: this.state.tasks.concat(
          { text: this.refs.myInput.value }
        )
      }, () => {
        this.setState({ inputText: '' });
      }
    );
  }

  render() {
    if (this.state.tasks > 3) {
      return (
        <div></div>
      );
    } else {
      return(
        <div>
          <ul>
            { this.getTasks() }
          </ul>
          <input type="text" ref="myInput" />
          <input type="button" value="add thing" onClick={this.addTask.bind(this)} />
        </div>
      );
    }
  }
}

ReactDOM.render(
  React.createElement(Todo),
  document.getElementById("main")
);
