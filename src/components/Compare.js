import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import ActivityButton from './ActivityComponent'



const Compare = (props) => {
    
    const [tasks, setTasks] = useState([])
    const [initialState, setInitialState] = useState(props.data)

    const values = initialState.filter(data => {
        return data.priority === true

    })
    
    useEffect(()=>{
        axiosWithAuth()
        .get('https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks/')
        .then (res => {
            setTasks(res.data)
        })
        .catch(error => console.log(error, "ERROR"))
    })

    return (
        <div className="compare-page">
        <div className="values">
            {values.map( item =>
                <ActivityButton name={item.value} value={item.value}>{item.value}</ActivityButton>
                )}
        </div>
        <div className="projects">
        {tasks.map(task => (
                    <ul key={task.name} className="project-list">
                        <li>{task.project1}</li>
                        <li>{task.project2}</li>
                        <li>{task.project3}</li>                        
                        
                    </ul>
                ))}



        </div>
        
        </div>

    )
}                        

export default Compare
