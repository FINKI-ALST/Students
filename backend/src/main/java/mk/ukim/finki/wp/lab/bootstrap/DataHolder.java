package mk.ukim.finki.wp.lab.bootstrap;
import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.Student;
import mk.ukim.finki.wp.lab.model.Teacher;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class DataHolder {
    public static List<Student> students=new ArrayList<Student>();
    public static List<Course> courses=new ArrayList<Course>();
    public static List<Student> studentsVP=new ArrayList<Student>();
    public static List<Student> studentsKE=new ArrayList<Student>();
    public static List<Student> studentsNICK=new ArrayList<Student>();
    public static List<Student> studentsMP=new ArrayList<Student>();
    public static List<Student> studentsV=new ArrayList<Student>();
}
