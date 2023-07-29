import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercises} />
        <Route path="/create" exact component={CreateExercises} />
        <Route path="/user" exact component={CreateUser} />
      </Router>
    </>
  );
}

export default App;
