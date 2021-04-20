import React from 'react';
import PropTypes from 'prop-types';
import GradeRow from "./gradeRow";
class GradesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { data, sort } = this.props;
        const rows = []
        data.map((student, index) => {
            rows.push(
                <GradeRow
                    student={student}
                    rank={index}
                    key={index}
                    sort={sort}
                />)
        })
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>{sort ? 'Rank' : ''}</th>
                        <th>Student's name</th>
                        <th>Student's surname</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}
GradesTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default GradesTable;