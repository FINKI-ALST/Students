package mk.ukim.finki.wp.lab.web.rest;

import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.Student;
import mk.ukim.finki.wp.lab.service.CourseService;
import mk.ukim.finki.wp.lab.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/students")
public class StudentRestController {
    private final StudentService studentService;
    public StudentRestController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping
    public List<Student> findAll() {
        return this.studentService.listAll();
    }
    @PostMapping("/add")
    public ResponseEntity<Student> save(@RequestParam String username, @RequestParam String password, @RequestParam String name) {
        return this.studentService.save(username, password, name)
                .map(student -> ResponseEntity.ok().body(student))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
