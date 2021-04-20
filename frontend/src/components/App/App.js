import './App.css';
import React from 'react';
import Header from '../Header/header';
import CourseService from '../../repository/courseRepository';
import {Component} from "react";
import Students from '../Students/StudentList/students';
import Teachers from '../Teachers/teachers'
import Courses from '../Courses/CourseList/courses'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import CourseAdd from "../Courses/CourseAdd/courseAdd";
import CourseEdit from "../Courses/CourseEdit/courseEdit";
import StudentAdd from "../Students/StudentAdd/studentAdd";
import Grades from "../Grades/grades";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers: [],
            courses: [],
            selectedCourse: {}
        }
    }
    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/grades"} exact render={() =>
                            <Grades grades={this.state.grades}/>}/>
                        <Route path={"/students/add"} exact render={() =>
                            <StudentAdd onAddStudent={this.addStudent}/>}/>
                        <Route path={"/students"} exact render={() =>
                            <Students students={this.state.students}/>}/>
                        <Route path={"/teachers"} exact render={() =>
                            <Teachers teachers={this.state.teachers}/>}/>
                        <Route path={"/courses/add"} exact render={() =>
                            <CourseAdd teachers={this.state.teachers}
                                       onAddCourse={this.addCourse}/>}/>
                            <Route path={"/courses/edit/:id"} exact render={() =>
                            <CourseEdit teachers={this.state.teachers}
                                        onEditCourse={this.editCourse}
                                         product={this.state.selectedCourse}/>}/>
                            <Route path={"/courses"} exact render={() =>
                            <Courses courses={this.state.courses}
                                      onDelete={this.deleteCourse} onEdit={this.getCourse}/>}/>
                        <Redirect to={"/courses"}/>
                    </div>
                </main>
            </Router>
        );
    }
    componentDidMount() {
        this.loadStudents();
        this.loadTeachers();
        this.loadCourses();
    }
    loadStudents = () => {
        CourseService.fetchStudents()
            .then((data) => {
                this.setState({
                    students: data.data
                })
            });
    }
    loadTeachers = () => {
        CourseService.fetchTeachers()
            .then((data) => {
                this.setState({
                    teachers: data.data
                })
            });
    }
    loadCourses = () => {
        CourseService.fetchCourses()
            .then((data) => {
                this.setState({
                    courses: data.data
                })
            });
    }
    deleteCourse = (courseId) => {
        CourseService.deleteCourse(courseId)
            .then(() => {
                this.loadCourses();
            });
    }
    addCourse = (name, description, teacher) => {
        CourseService.addCourse(name, description, teacher)
            .then(() => {
                this.loadCourses();
            });
    }
    addStudent = (username, password, name, surname) => {
        CourseService.addCourse(username, password, name, surname)
            .then(() => {
                this.loadStudents();
            });
    }
    getCourse = (id) => {
        CourseService.getCourse(id)
            .then((data) => {
                this.setState({
                    selectedCourse: data.data
                })
            })
    }
    editCourse = (id, name, description, teacher) => {
        CourseService.editCourse(id, name, description, teacher)
            .then(() => {
                this.loadCourses();
            });
    }
}
export default App;
