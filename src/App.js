import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Maciek", age: "21"},
            {name: "Bartek", age: "22"},
            {name: "Michal", age: "24"},
            {name: "Grzegorz", age: "22"}
        ],
        otherState: 'someother value'
    }

    switchNameHandler = (newName) => {
        console.log('Was clicked!');
        this.setState({persons: [
            {name: newName, age: "21"},
            {name: "react", age: "22"},
            {name: "course", age: "24"},
            {name: "man", age: "22"}
        ]
        })
    }

    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
            {name: "event change", age: "21"},
            {name: "event change", age: "22"},
            {name: event.target.value, age: "24"},
            {name: "event change", age: "22"}
        ]
      })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '8px solid blue',
            padding: '128px',
            cursor: 'pointer'
        };

        return (
        <div className = "App">
            <h1> Hi hello how are you, to znaczy: witaj piekna </h1>
            <p> Lets see </p>
            <button
              style={style}
              onClick={() => this.switchNameHandler('arrow function() =>')}>Switch Name</button>
            <Person
              name = {this.state.persons[0].name}
              age = {this.state.persons[0].age} />
            <Person
              name = {this.state.persons[1].name}
              age = {this.state.persons[1].age} />
            <Person
              name = {this.state.persons[2].name}
              age = {this.state.persons[2].age}
              changed={this.nameChangedHandler}
              click={this.switchNameHandler.bind(this, '.bind(this, arg)')} > Whattup </Person>
            <Person
              name = {this.state.persons[3].name}
              age = {this.state.persons[3].age}
              />
        </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi hello how are u'));
    }
}

export default App;