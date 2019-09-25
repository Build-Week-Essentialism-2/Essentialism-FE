import React, {useState} from "react"
import ActivityButton from "./components/ActivityComponent"
import {Link} from "react-router-dom"



const Top3 = (props) => {
    const [note, setNote] = useState({ body: "" });
    const [initialState, setInitialState] = useState(props.data)

    const handleChanges = e => {
        setNote({...note, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
    e.preventDefault();
    setNote({ body: "" });
  };
 
  
console.log(props)
const values = initialState.filter(data => {
        return data.priority === true
 })       

return (
<div className= "top3page"> 
<div className="button-container"> 
    {values.map( item =>
                    <ActivityButton name={item.value} value={item.value}>{item.value}</ActivityButton>
                )}
</div> 

    <div className="descript-container">
    <h3 className="value-descript"> In a few sentences, describe why the selected values are important to you. Focus on thoughts and feelings, don't worry about spelling or grammar. </h3>
    </div>

    <form className="values-form" onSubmit={submitForm}>
    
      <label className="note" htmlFor="note">My Values</label>
      <textarea className="text-box"
        id="value"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <Link to="/projects">
      <button className="submit-button">Submit </button> 
      </Link>
    </form>
</div>
)

}

export default Top3