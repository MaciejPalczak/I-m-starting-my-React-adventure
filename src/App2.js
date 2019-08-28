import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';



//Other version of react scripting included in project for learning reasons




const App = props =>{

        const[personsState,setPersonsState] = useState({

               persons: [
                    {name: "Maciek", age: "21"},
                    {name: "Bartek", age: "22"},
                    {name: "Michal", age: "24"},
                    {name: "Grzegorz", age: "22"}
                ],
                otherState: 'someother value'

        });
 //   render() {

        const switchNameHandler = () => {
                 console.log('Was clicked!');
                 setPersonsState({persons: [
                    {name: "switchNameHandler", age: "21"},
                    {name: "switchNameHandler", age: "22"},
                    {name: "switchNameHandler", age: "24"},
                    {name: "switchNameHandler", age: "22"}
                 ]
                 });
        };
        return (
        <div className = "App">
            <h1> Hi hello how are you, to znaczy: witaj piekna </h1>
            <p> Lets see </p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
            <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
            <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}> Whattup </Person>
            <Person name = {personsState.persons[3].name} age = {personsState.persons[3].age} />
        </div>
        );
        //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi hello how are u'));
    }
//}

export default App;

//class App extends Component {
//    state = {
//        persons: [
//            {name: "Maciek", age: "21"},
//            {name: "Bartek", age: "22"},
//            {name: "Michal", age: "24"},
//            {name: "Grzegorzk", age: "22"}
//        ],
//        otherState: 'someother value'
//    }
//
//    switchNameHandler = () => {
//        console.log('Was clicked!');
//        this.setState({persons: [
//            {name: "ech", age: "21"},
//            {name: "react", age: "22"},
//            {name: "nic", age: "24"},
//            {name: "ciekawego", age: "22"}
//        ]
//        })
//    }