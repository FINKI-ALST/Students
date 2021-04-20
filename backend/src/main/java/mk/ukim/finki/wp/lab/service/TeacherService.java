package mk.ukim.finki.wp.lab.service;
import mk.ukim.finki.wp.lab.model.Teacher;

import java.util.List;
import java.util.Optional;
public interface TeacherService {
    List<Teacher> findAll();
    Teacher save(Teacher t);
    public Optional<Teacher> findTeacherById(Long id);
}
