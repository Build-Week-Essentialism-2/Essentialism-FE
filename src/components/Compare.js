import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import ActivityButton from './ActivityComponent'


const Activities = [
    {name:"Activity 1"},
    {name:"Activity 2"},
    {name:"Activity 3"}
]



const Compare = () => {
    // const [topThree, setTopThree] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect (()=> {
        axiosWithAuth()
        .get('https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks')
        .then(res =>{
            setTasks(res.data)
        }) 
        .catch(error => console.log(error))
    })

    // useEffect (() => {
    //     axiosWithAuth()
    //     .get("")
    //     .then(res =>{
    //         setTopThree(res.data)
    //     })
    //     .catch(err => console.log(err), err)
    // })


    return (
        <div className="compare-page">
        <div className="values">
        {/* {topThree.map(item => (
                    <ul key={item.name} className="values-list">
                        <li>{item.value1}</li>
                        <li>{item.value2}</li>
                        <li>{item.value3}</li>                        
                        
                    </ul>
                ))} */}

                <ActivityButton name={Activities[0].name} />
                <ActivityButton name={Activities[1].name} />
                <ActivityButton name={Activities[2].name} />
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
