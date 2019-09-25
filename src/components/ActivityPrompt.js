import React, {useState, useEffect} from "react"
import {withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {Link} from "react-router-dom"

const ActivityForm = ({values, status, touched, errors}) => {
    // const [projects, setProject] = useState([])
// console.log(status)
// console.log(values)

    // useEffect(()=> {
    //     if (status) {
    //         setProject(status)
    //         console.log(projects)
            
           
    //     }
    // }, [status])

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

                <button type="submit"  className="submit-button">Submit </button>
                <Link to="/compare">
                
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
            user_id: localStorage.getItem('user_id'),
            project2: project2 || "",          
            project3: project3 || ""
            
            }
        },
    
    
    validationSchema: Yup.object().shape({
        project1: Yup.string().required("Please enter your first project or activity."),
        project2: Yup.string().required("Please enter your second project or activity."),
        project3: Yup.string().required("Please enter your third project or activity.")
        

    }),

    handleSubmit(values, {setStatus, resetForm}) {
        console.log("THIS IS FROM HANDLE SUBMIT")
       const payload = [{
            task_name:values.project1,
            user_id:values.user_id,
        },
        {
            task_name:values.project2,
            user_id:values.user_id,
        },
        {
            task_name:values.project3,
            user_id:values.user_id,
        }
        ]
        // resetForm('');
        axiosWithAuth()
        .post('/api/tasks', payload)
        .then((res) => {
            console.log(res)            
            // setStatus(res)
            // props.history.push("/compare");
        })
        .catch(err => console.log(err.res))
        
    }


})(ActivityForm)

export default FormikActivityForm