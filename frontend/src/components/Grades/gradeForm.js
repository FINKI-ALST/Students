import React from 'react';
import PropTypes from 'prop-types';
class GradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            surname: '',
            course: '',
            grade:''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleGradesChange = this.handleGradesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleSurnameChange(event) {
        this.setState({surname: event.target.value});
    }
    handleCourseChange(event) {
        this.setState({course: event.target.value});
    }
    handleGradesChange(event) {
        this.setState({grade: event.target.value});
    }
    handleSubmit(event) {
        this.props.addStudent(this.state.name, this.state.surname, this.state.course, this.state.grade);
        this.setState({
            name: '',
            surname: '',
            course: '',
            grade: ''
        });
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Surname:
                    <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} />
                </label>
                <label>
                    Course:
                    <input type="text" value={this.state.course} onChange={this.handleCourseChange} />
                </label>
                <label>
                    Grade:
                    <input type="number" value={this.state.grade} onChange={this.handleGradesChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
GradeForm.propTypes = {
    addStudent: PropTypes.func.isRequired
};
export default GradeForm;