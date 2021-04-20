package mk.ukim.finki.wp.lab.service.impl;
import mk.ukim.finki.wp.lab.model.Course;
import mk.ukim.finki.wp.lab.model.Teacher;
import mk.ukim.finki.wp.lab.repository.jpa.TeacherRepository;
import mk.ukim.finki.wp.lab.service.TeacherService;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;
@Service
public class TeacherServiceImpl implements TeacherService {
    private final TeacherRepository teacherRepository;

    public TeacherServiceImpl(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher save(Teacher t) {
        return teacherRepository.save(t);
    }

    @Override
    public Optional<Teacher> findTeacherById(Long id)
    {
        return teacherRepository.findById(id);
    }
    @PostConstruct
    public void init()
    {
        teacherRepository.findAll().add(new Teacher("Marko","Markov"));
        teacherRepository.findAll().add(new Teacher("Nikola","Nikolov"));
        teacherRepository.findAll().add(new Teacher("Elena","Jovanova"));
        teacherRepository.findAll().add(new Teacher("Aleksandra","Stefanovska"));
        teacherRepository.findAll().add(new Teacher("Angela","Jovanoska"));
    }
}
