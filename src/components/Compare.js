import React {useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"

const Compare = ({values, status}) => {
    const [topThree, setTopThree] = useState([])
    const [status, setStatus] = useState([])

    useEffect (()=> {
        axiosWithAuth()
        .get("", status)
        .then(res =>{
            setStatus(res.data)
        })
        .catch(err=> console.log(err), err)
    })

    useEffect (() => {
        axiosWithAuth()
        .get("")
        .then(res =>{
            setTopThree(res.data)
        })
        .catch(err => console.log(err), err)
    })


    return (
        <div className="compare-page">
        <div className="values">
        {topThree.map(item => (
                    <ul key={item.name} className="values-list">
                        <li>{item.value1}</li>
                        <li>{item.value2}</li>
                        <li>{item.value3}</li>                        
                        
                    </ul>
                ))}
        </div>
        <div className="projects">
        {status.map(project => (
                    <ul key={project.name} className="project-list">
                        <li>{project.project1}</li>
                        <li>{project.project2}</li>
                        <li>{project.project3}</li>                        
                        
                    </ul>
                ))}

        </div>
        
        </div>

    )
}                        

