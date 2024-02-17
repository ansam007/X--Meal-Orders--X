import Header from "./components/Header/Header";
import MealSummary from "./components/Meals/MealSummary";
import React from "react";
import MealItems from './components/Meals/MealItems';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealSummary></MealSummary>
      <MealItems></MealItems>
    </React.Fragment>
  );
}

export default App;
