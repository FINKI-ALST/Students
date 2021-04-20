import React from 'react';
import CourseTerm from '../CourseTerm/courseTerm';
import {Link} from 'react-router-dom';
const courses = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Description</th>
                            <th scope={"col"}>Teacher name</th>
                            <th scope={"col"}>Teacher surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.courses.map((term) => {
                            return (
                                <CourseTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/courses/add"}>Add</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default courses;