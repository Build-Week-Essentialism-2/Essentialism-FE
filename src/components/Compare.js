import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import ActivityButton from './ActivityComponent'



const Compare = (props) => {
    
    const [tasks, setTasks] = useState([])
    const [initialState, setInitialState] = useState(props.data)

    const values = initialState.filter(data => {
        return data.priority === true

    })
    const user_id = props.match.params.id
    console.log(props)
    
    useEffect(()=>{
        axiosWithAuth()
        .get(`/api/tasks/${user_id}`)
        .then (res => {
            console.log(res)
            setTasks(res.data)
        })
        .catch(error => console.log(error, "ERROR"))
    }, [])

    return (
        <div className="compare-page">
        <div className="values">
            {values && values.map( item =>
                <div className="value">
                <ActivityButton  name={item.value} value={item.value}>{item.value}</ActivityButton>
                </div>
                )}
        </div>
        <div className="projects">
        {tasks && tasks.map(task => (
                    <ul key={task.name} className="project-list">
                        <li>{task.task_name}</li>
                                                
                        
                    </ul>
                ))}



        </div>
        
        </div>

    )
}                        

export default Compare
