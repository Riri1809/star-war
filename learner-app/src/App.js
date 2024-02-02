<<<<<<< HEAD
<<<<<<< HEAD
// 1. import the data
import { learnerData } from "./Data/learnerData";
// 2. import the State Hook
import { useState } from "react";

import Learner from "./components/Learner";
import CreateLearnerForm from "./components/CreateLearnerForm";

import "./App.css";

function App() {
  // 3. Initialize a new state for the learners data
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="App">
      <h1>Learner App</h1>

      <CreateLearnerForm setLearners={setLearners} learners={learners} />

      {/* 4. Map over the data and render a Learner component for each object in the array */}

      <div>
        {learners.map((learner) => (
          <Learner
            learner={learner}
            key={learner.id}
            learners={learners}
            setLearners={setLearners}
          />
        ))}
      </div>
=======
=======
>>>>>>> 0afee7283aadf96644181cb38355e6884b15d499
import {learnerData} from './data/learnerData';
// import useState

import './App.css';

function App() {
  // create a new state passing the learnerData
  const [learners, setLearners] = useState(learnerData);
  // const [learners, setLearners] = useState(learnerData)
  return (
    <div className="App">
      <h1>Learner App</h1>
      {learners.map(learner => {
        
      })}
<<<<<<< HEAD
>>>>>>> 0afee7283aadf96644181cb38355e6884b15d499
=======
>>>>>>> 0afee7283aadf96644181cb38355e6884b15d499
    </div>
  );
}

export default App;