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
        
        
        </div>

    )
}                        

