package mk.ukim.finki.wp.lab.model.dto;
import lombok.Data;
import mk.ukim.finki.wp.lab.model.Student;
import mk.ukim.finki.wp.lab.model.Teacher;
import java.util.List;
@Data
public class CourseDto {
    private String name;
    private String description;
    private Long teacher;
    public CourseDto(){
    }
    public CourseDto (String name, String description, Long teacher) {
        this.name = name;
        this.description = description;
        this.teacher = teacher;
    }
}
