import React from "react";

const Overview = (props) => {
    const { tasks, onDelete } = props

    

    return (
        tasks.map((task) => {
            return (
                <div id={task.id}>
                    <p >{tasks.indexOf(task)+1}. {task.text}</p>
                    <button onClick={onDelete}>Delete</button>
                </div>

            )
        })
        
    )
}
export default Overview