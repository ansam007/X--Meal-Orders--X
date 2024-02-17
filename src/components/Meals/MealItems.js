import ShowMeals from "./ShowMeals";
import classes from './MealItem.module.css';
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealItems = () => {
  const mealItems = DUMMY_MEALS.map((meals) => (
    <ShowMeals
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    ></ShowMeals>
  ));
  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealItems}</ul>
        </Card>
    </section>
  )
};

export default MealItems;
