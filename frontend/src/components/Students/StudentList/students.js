import React from 'react';
import StudentTerm1 from "../../Students/StudentTerm1/studentTerm1";
import {Link} from "react-router-dom";
const students = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Username</th>
                            <th scope={"col"}>Password</th>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.students.map((term) => {
                            return (
                              <StudentTerm1 term={term}/>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/students/add"}>Add Student</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default students;