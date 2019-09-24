import React, {useState, useEffect} from "react"
import {withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

const ActivityForm = ({values, status}) => {
    const [projects, setProject] = useState([])

    useEffect(()=> {
        if (status) {
            setProject([...projects, status])
        }
    }, [status])

    return (
        <div className="project-page">
        <h3 className="project-title"> Please list some of the projects or activities you are currently involved in.  </h3>
        <div className="form-container"> 
            <Form className="project-form">
                <label className="project1"> 
                Project 1
                <Field className="project1-field"
                type="text"
                name="project1"
                placeholder="First Project"
                />
                </label>

                <label className="project2"> 
                Project 2
                <Field className="project2-field"
                type="text"
                name="project2"
                placeholder="Second Project"
                />
                </label>

                <label className="project3"> 
                Project 3
                <Field className="project3-field"
                type="text"
                name="project3"
                placeholder="Third Project"
                />
                </label>

                <button className="submit-button">Submit </button>

                <div className="project-list-container">                
                {projects.map(project => (
                    <ul key={project.name} className="project-list">
                        <li>{project.project1}</li>
                        <li>{project.project2}</li>
                        <li>{project.project3}</li>
                        
                        
                    </ul>
                ))}
                </div>
                
            </Form>
        
        </div>
        
        </div>

    )
}

const FormikActivityForm= withFormik({
    mapPropsToValues({project1, project2, project3}) {
        return {
            project1: project1 || "",
            project2: project2 || "",
            project3: project3 || "",
                }
    },
    
    validationSchema: Yup.object().shape({
        project1: Yup.string().required("Please enter your first project or activity."),
        project2: Yup.string().required("Please enter your second project or activity."),
        project3: Yup.string().required("Please enter your third project or activity.")
        

    }),

    handleSubmit(values, {setStatus, resetForm}) {
        resetForm('');
        axios
        .post('https://reqres.in/api/users', values)
        .then(res => {
            setStatus(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err.res))
    }


})(ActivityForm)


export default FormikActivityForm