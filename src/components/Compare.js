import React from "react"
import axios from "axios"

const Compare = ({values, status}) => {

    useEffect (()=> {
        axios
        .get("", status)
        .then(res =>{
            setStatus(res.data)
        })
        .catch(err=> console.log(err), err)
    })

}

