import React from 'react';
import {useHistory} from 'react-router-dom';
const CourseEdit = (props) => {
    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: 0,
        teacher: 1
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.courses.name;
        const description = formData.description !== 0 ? formData.description : props.courses.description;
        const teacher = formData.teacher !== 0 ? formData.teacher : props.courses.teacher.id;
        props.onEditCourse(props.courses.id, name, description, teacher);
        history.push("/courses");
    }
    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.courses.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div> className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder={props.courses.description}
                               onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Teacher</label>
                        <select name="teacher" className="form-control" onChange={handleChange}>
                            {props.teachers.map((term) => {
                                if(props.courses.teacher !== undefined &&
                                    props.courses.teacher.id === term.id)
                                    return <option selected={props.courses.teacher.id} value={term.id}>{term.name}</option>
                                else return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default CourseEdit;