import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar";
import ExerciseList from "./components/exerciselist";
import EditExercise from "./components/editexercise";
import CreateExercise from "./components/createexercise";
import CreateUser from "./components/createuser";
import './components/index.css'

function App() {
  return (
    <Router>
     <div className="">
     <Navbar/>
     <br/>
      <Route path='/' exact component={ExerciseList}/>
      <Route path='/edit/:id' exact component={EditExercise}/>
      <Route path='/create' exact component={CreateExercise}/>
      <Route path='/user' exact component={CreateUser}/>
    </div>
    </Router>
  );
}

export default App;
