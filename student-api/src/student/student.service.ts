import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Student } from './student.interface';
import { CreateStudentDto } from './dto/student.dto';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class StudentService {
  private students: Student[] = [];

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
    return this.students;
  }

  findById(id: string) {
    return this.students.find((s) => s.id === id) || null;
  }

  create(data: CreateStudentDto): Student {
    const student: Student = {
      id: Date.now().toString(),
      name: data.name,
      major: data.major,
    };
    this.students.push(student);
    return student;
  }
}
