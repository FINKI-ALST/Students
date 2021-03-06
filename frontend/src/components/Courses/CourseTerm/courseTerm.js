import {Link} from 'react-router-dom';
import React from 'react';
const courseTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.description}</td>
            <td scope={"col"}>{props.term.teacher.name}</td>
            <td scope={"col"}>{props.term.teacher.surname}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.courseId)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/courses/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    );
}
export default courseTerm;