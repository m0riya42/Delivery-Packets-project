import React, { useState } from 'react'

const FormLearn = ({ onAddGoal }) => {
    const [enterdText, setText] = useState('');
    const addHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enterdText
            // text: 'My new Goal'
        };
        setText(''); onAddGoal(newGoal)
        // console.log(newGoal)
        // console.log(onAddGoal)
    };

    const textChangeHandler = event => {
        setText(event.target.value);
    }


    return (
        <form onSubmit={addHandler}>
            <input type="text" value={enterdText} onChange={textChangeHandler} />
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default FormLearn