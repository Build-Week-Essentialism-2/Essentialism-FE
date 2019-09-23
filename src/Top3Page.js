import React, {useState} from "react"
import ActivityButton from "./components/ActivityComponent"

const Activities = [
    {name:"Activity 1"},
    {name:"Activity 2"},
    {name:"Activity 3"}
]



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
<div className= "top3page"> 
<div className="button-container"> 
    <ActivityButton name={Activities[0].name} />
    <ActivityButton name={Activities[1].name} />
    <ActivityButton name={Activities[2].name} />

</div>

    <div className="descript-container">
    <h3 className="value-descript"> In a few sentences, describe why the selected values are important to you. Focus on thoughts and feelings, don't worry about spelling or grammar. </h3>
    </div>

    <form className="values-form" onSubmit={submitForm}>
    
      <label className="note" htmlFor="note">My Values</label>
      <textarea
        id="value"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button className="submit-button">Submit </button> 
    </form>
</div>
)

}

export default Top3