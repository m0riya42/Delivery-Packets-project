import React from 'react'
import './LearnReact.css'


const LearnReact = ({ items }) => {

    return (

        <ul className="learnReact" > {
            // [<li>Finish</li>, <li>Works</li>]
            items.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>
            })
        }</ul>
    )

}

export default LearnReact