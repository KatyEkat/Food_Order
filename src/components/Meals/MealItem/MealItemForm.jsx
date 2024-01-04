import React, { useRef, useState } from "react";

import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState();
	const amountInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().legnth === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
      setAmountIsValid(false)
			return;
		}

    props.onAddToCart(enteredAmountNumber);
    
	};

	return (
		<form className={style.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_",
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button className={style.button}>Add</button>
      {!amountIsValid && <p>Please, enter a valid amount (1-5)</p>}
		</form>
	);
};

export default MealItemForm;
