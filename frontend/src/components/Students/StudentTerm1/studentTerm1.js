import React from 'react';
const studentTerm1 = (props) => {
   return (
        <tr>
            <td scope={"col"}>{props.term.username}</td>
            <td scope={"col"}>{props.term.password}</td>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.surname}</td>
            <td scope={"col"} className={"text-right"}>
            </td>
        </tr>
    );
}
export default studentTerm1;