import classes from "./ShowMeals.module.css";
import MealItemForm from "./MealItemForm";

const ShowMeals = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};

export default ShowMeals;
