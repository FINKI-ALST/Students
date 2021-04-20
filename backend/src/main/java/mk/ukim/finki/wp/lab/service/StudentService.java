package mk.ukim.finki.wp.lab.service;
import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.Student;
import mk.ukim.finki.wp.lab.model.dto.CourseDto;

import java.util.List;
import java.util.Optional;
public interface StudentService {
    List<Student> listAll();
    List<Student> searchByNameOrSurname(String text);
    Student save(String username, String password, String name, String surname);
    Optional<Student> save(String username, String password, String name);
}
