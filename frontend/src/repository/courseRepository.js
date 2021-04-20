import axios from '../custom-axios/axios';
const CourseService = {
    fetchCourses: () => {
        return axios.get("/courses");
    },
    fetchStudents: () => {
        return axios.get("/students");
    },
    fetchTeachers: () => {
        return axios.get("/teachers");
    },
    deleteCourse: (id) => {
        return axios.delete(`/courses/delete/${id}`);
    },
    addCourse: (name, description, teacher) => {
        return axios.post("/courses/add", {
            "name" : name,
            "description" : description,
            "teacher" : teacher

        });
    },
    addStudent: (username, password, name, surname) => {
        return axios.post("/students/add", {
            "username" : username,
            "password" : password,
            "name" : name,
            "surname" : surname
        });
    },
    editCourse: (id, name, description, teacher) => {
        return axios.put(`/courses/edit/${id}`, {
            "name" : name,
            "description" : description,
            "teacher" : teacher
        });
    },
    getCourse: (id) => {
        return axios.get(`/courses/${id}`);
    }
}
export default CourseService;