import React from 'react';
import {useHistory} from 'react-router-dom';
const CourseAdd = (props) => {
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
        const name = formData.name;
        const description = formData.description;
        const  teacher = formData.teacher;
       ;
       props.onAddCourse(name, description, teacher);
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
                               required
                               placeholder="Name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Description"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Teacher</label>
                        <select name="teacher" className="form-control" onChange={handleChange}>
                            {props.teachers.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default CourseAdd;