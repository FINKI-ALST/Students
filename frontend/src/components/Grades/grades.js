import React from 'react';
import sortBy from "lodash/sortBy"
import GradeForm from "./gradeForm";
import GradesTable from "./gradesTable";
import axios from "../../custom-axios/axios";
class Grades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{"id":1,"name":"Stefan", "surname": "Stefanovski", "course": "Veb programiranje","grade": 10},
                {"id":2,"name":"Atanas","surname": "Georgiev", "course": "Veb programiranje","grade": 10},
                {"id":3,"name":"Milica","surname": "Jovanova", "course": "Napredna interakcija covek kompjuter","grade": 9},
                {"id":4,"name":"Mario","surname": "Shumenkovski", "course": "Vizuelizacija","grade": 7},
                {"id":5,"name":"Vasko","surname": "Jovov", "course": "Napredna interakcija covek kompjuter","grade": 8},
                {"id":6,"name":"Aleksandra","surname": "Stefanovska", "course": "Veb","grade": 6},
                {"id":7,"name":"Diana","surname": "Stefanovska", "course": "Vizuelizacija","grade": 7},],
            sortdata: []
        };
        this.fetchGrades = this.fetchGrades.bind(this);
        this.addGrade = this.addGrade.bind(this);
    }
    fetchGrades(){
        return axios.get("/grades");

    }
    addGrade(name, surname, course, grade){
        let student = {name, surname, course, grade}
        console.log(student);
        this.setState({
            data: [...this.state.data, student]
        },() => this.sortGrades());
    }
    sortGrades(){
        let sortdata = sortBy(this.state.data, "grade").reverse();
        this.setState({sortdata})
    }
    componentDidMount() {
        this.sortGrades();
    }
    render() {
        return (
            <div>
                <GradeForm addStudent={this.addGrade}/>
                <GradesTable data={this.state.data} sort={false} />
                <GradesTable data={this.state.sortdata} sort={true} />
            </div>
        );
    }
}
Grades.propTypes = {};
export default Grades;