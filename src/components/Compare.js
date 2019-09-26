import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import ActivityButton from './ActivityComponent'



const Compare = (props) => {
    
    const [tasks, setTasks] = useState([])
    const [initialState, setInitialState] = useState(props.data)

    const values = initialState.filter(data => {
        return data.priority === true

    })
    const user_id = localStorage.getItem('user_id')
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

    const reset = () => {
        axiosWithAuth()
        .delete(`/api/tasks/${user_id}`)
        .then (res => {
            console.log(res)
            setTasks(null)
        })
        .catch(error => console.log(error, "ERROR"))
    }


    return (
        
        <div className="compare">
        <div className="title-container">
        <h3 className="compare-title">
            Compare your values and your current projects. Are they aligned? What can you change in order to create more projects that are in line with your values?
        </h3>
        </div>
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
                <div className="project">
                    <ul key={task.name} className="project-list">
                        <li>{task.task_name}</li>                             
                        
                    </ul>
                    </div>
                ))}

        </div>
        </div>  
        <button onClick={reset} className="reset">
        Reset Tasks
        </button>      
        </div>

    )
}                        

export default Compare
