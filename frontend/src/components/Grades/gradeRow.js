import React from 'react';
import PropTypes from 'prop-types';
class GradeRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { student, rank, sort } = this.props
        return (
            <tr>
                <td>{sort ? rank+1 : ''}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.course}</td>
               <td>{student.grade}</td>
            </tr>
        );
    }
}
GradeRow.propTypes = {
    student: PropTypes.object.isRequired
};
export default GradeRow;