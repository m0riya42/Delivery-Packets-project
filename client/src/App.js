import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
// import React, { Component, useState } from "react"
import LearnReact from './components/LearnReact/LearnReact';
import FormLearn from './components/FormLearn/FormLearn'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Manager from './pages/Manager';



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiResponse: "", dbResponse: ""
//     };
//   }

//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
//   }
//   callDB() {
//     fetch("http://localhost:9000/testDB")
//       .then(res => res.text())
//       .then(res => this.setState({ dbResponse: res }))
//       .catch(err => err);
//   }
//   componentWillMount() {
//     this.callAPI();
//     this.callDB();
//   }

//   render() {
//     return (
//       <h1>Hi, this is react!</h1>
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h1 className="App-title">Welcom</h1>
//       //   </header>
//       //   {/* <div id="try" dangerouslySetInnerHTML={this.state.apiResponse}></div> */}
//       //   <p className="App-intro">{this.state.apiResponse}</p>
//       //   <p className="App-intro">{this.state.dbResponse}</p>
//       // </div>
//     );
//   }
// }








//first traiel
/*const App = () => {
  const [goals, setGoals] = useState([{ id: '1', text: 'finish1' }, { id: '2', text: 'finish2' }, { id: '3', text: 'finish3' }]);
  // const goals = [{ id: '1', text: 'finish1' }, { id: '2', text: 'finish2' }, { id: '3', text: 'finish3' }]
  const addNewGoalHandler = newGoal => {
    // goals.push(newGoal);
    // setGoals(goals.concat(newGoal));// not the best way
    setGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));// not the best way
  };
  return (<div>
    <h2>Course Goals</h2>
    <FormLearn onAddGoal={addNewGoalHandler} />
    <LearnReact items={goals} />
  </div>)
}*/

const App = () => {
  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES

  // if (auth) { //-------------->Manager/User
  //   return <Profile/>
  // }
  //else{ return <Home/>}

  return <Router>
    <Switch>


      <Route path="/" exact>
        <Home />
      </Route>
      {/* <Route path="/about/" exact>
        <About />
      </Route> */}
      <Route path="/manager/" >
        <Manager />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
}

//redirect- when not moving to the right page go back to home

export default App;