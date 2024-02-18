import classes from './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <label htmlFor="amount">Amount</label>
            <input id='amount' type='number' min='1' max='5' step='1' defaultValue='1'></input>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;