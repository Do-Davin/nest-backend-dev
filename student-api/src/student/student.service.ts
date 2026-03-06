import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class StudentService {
  private students: (CreateStudentDto & { id: string })[] = [];
  constructor(
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: CourseService,
  ) {}

  getAllCoursesFromStudent() {
    console.log(`Get all courses from Student`);
    return this.courseService.getAllCourses();
  }

  findAll() {
    console.log(`Fetching Student`);
    return this.students.map((student) => ({
      name: student.name,
      major: student.major,
    }));
  }

  findById(id: string) {
    return this.students.find((student) => student.id === id);
  }

  create(data: CreateStudentDto) {
    const student = {
      id: Date.now().toString(),
      name: data.name,
      major: data.major,
    };
    this.students.push(student);
    return student;
  }
}
