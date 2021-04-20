package mk.ukim.finki.wp.lab.web.rest;
import mk.ukim.finki.wp.lab.model.Teacher;
import mk.ukim.finki.wp.lab.service.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/teachers")
public class TeacherRestController {
    private final TeacherService teacherService;
    public TeacherRestController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @GetMapping
    public List<Teacher> findAll() {
        return this.teacherService.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Teacher> findTeacherById(@PathVariable Long id) {
        return this.teacherService.findTeacherById(id)
                .map(teacher -> ResponseEntity.ok().body(teacher))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
