import React from "react"
import ActivityButton from "./Components/ActivityComponent"

const Top3 = (props) => {

    const [note, setNote] = useState({ body: "" });

    const handleChanges = e => {
        setNote({...note, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
    e.preventDefault();
    setNote({ body: "" });
  };

return (

    <ActivityButton name="Activity 1" />
    <ActivityButton name="Activity 2" />
    <ActivityButton name="Activity 3" />
    
    <h3> In a few sentences, describe why the selected values are important to you. Focus on thoughts/feelings, and don't worry about spelling/grammar. </h3>

    <form onSubmit={submitForm}>
    
      <label htmlFor="note">My Values</label>
      <textarea
        id="value"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <ActivityButton name="Submit" /> 
    </form>
)

}