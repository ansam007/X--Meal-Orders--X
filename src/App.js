import Header from "./components/Header/Header";
import MealSummary from "./components/Meals/MealSummary";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealSummary></MealSummary>
    </React.Fragment>
  );
}

export default App;
