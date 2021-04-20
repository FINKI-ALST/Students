package mk.ukim.finki.wp.lab.web.rest;

import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.service.CourseService;
import mk.ukim.finki.wp.lab.service.GradeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/grades")
public class GradeRestController {

    private final GradeService gradeService;
    private final CourseService courseService;

    public GradeRestController(GradeService gradeService, CourseService courseService) {
        this.courseService = courseService;
        this.gradeService = gradeService;
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<Course> findGradesOfCourse(@PathVariable Long courseId) {
        return this.courseService.findCourse(courseId)
                .map(course -> ResponseEntity.ok().body(course))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }




}
