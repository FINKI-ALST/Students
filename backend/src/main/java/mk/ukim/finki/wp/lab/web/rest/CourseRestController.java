package mk.ukim.finki.wp.lab.web.rest;
import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.dto.CourseDto;
import mk.ukim.finki.wp.lab.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/courses")
public class CourseRestController {
    private final CourseService courseService;
    public CourseRestController(CourseService courseService) {
        this.courseService = courseService;
    }
    @GetMapping
    public List<Course> listAll() {
        return this.courseService.listAll();
    }
    @GetMapping("/{courseId}")
    public ResponseEntity<Course> findCourse(@PathVariable Long courseId) {
        return this.courseService.findCourse(courseId)
                .map(course -> ResponseEntity.ok().body(course))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping("/add")
    public ResponseEntity<Course> save(@RequestBody CourseDto courseDto) {
        return this.courseService.save(courseDto)
                .map(course -> ResponseEntity.ok().body(course))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<Course> save(@PathVariable Long id, @RequestBody CourseDto courseDto) {
        return this.courseService.edit(id, courseDto)
                .map(course -> ResponseEntity.ok().body(course))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
    @DeleteMapping("/delete/{courseId}")
    public ResponseEntity deleteById(@PathVariable Long courseId) {
        this.courseService.deleteById(courseId);
        if(this.courseService.findCourse(courseId).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}




