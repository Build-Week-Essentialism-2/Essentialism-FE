import React, {useState, useEffect} from "react"
import {withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {Link} from "react-router-dom"

const ActivityForm = ({values, status, touched, errors}) => {
    const [projects, setProject] = useState([])

    useEffect(()=> {
        if (status) {
            setProject([...projects, status])
            console.log(projects)
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
                {touched.project1 && errors.project1 && <p className="error">{errors.project1}</p>}

                <label className="project2"> 
                Project 2
                <Field className="project2-field"
                type="text"
                name="project2"
                placeholder="Second Project"
                />
                </label>
                {touched.project2 && errors.project2 && <p className="error">{errors.project2}</p>}

                <label className="project3"> 
                Project 3
                <Field className="project3-field"
                type="text"
                name="project3"
                placeholder="Third Project"
                />
                </label>
                {touched.project3 && errors.project3 && <p className="error">{errors.project3}</p>}
                <Link to="/compare">
                <button className="submit-button">Submit </button>
                </Link>

                {/* <div className="project-list-container">                
                {projects.map(project => (
                    <ul key={project.name} className="project-list">
                        <li>{project.project1}</li>
                        <li>{project.project2}</li>
                        <li>{project.project3}</li>
                                           
                        
                    </ul>
                ))}
                </div> */}
                
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
        axiosWithAuth()
        .post('https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks')
        .then(res => {
            setStatus(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err.res))
    }


})(ActivityForm)

export default FormikActivityForm