package mk.ukim.finki.wp.lab.model.dto;
import lombok.Data;
import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.Student;
import javax.persistence.ManyToOne;
@Data
public class GradeDto {
    private Character grade;
    private Long student;
    private Long course;
    public GradeDto(){
    }
    public GradeDto(Character grade, Long student, Long course) {
        this.grade = grade;
        this.student = student;
        this.course = course;
    }
}