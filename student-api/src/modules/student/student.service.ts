import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from 'src/modules/course/course.service';

export interface Student {
  id: string;
  name: string;
  major: string;
}

@Injectable()
export class StudentService {
  // private students: (CreateStudentDto & { id: string })[] = [];
  private students: Student[] = [];
  constructor(
    @Inject(forwardRef(() => CourseService))
    private readonly courseService: CourseService,
  ) {}

  /**
   * Circular Dependency Problem Fixed
   */
  getAllCoursesFromStudent() {
    console.log(`[TEST]: Get all courses from Student`);
    return this.courseService.getAllCourses();
  }

  findAll() {
    console.log(`Fetching Student`);
    return this.students;
  }

  findById(id: string) {
    return this.students.find((s) => s.id === id) || null;
  }

  create(data: { name: string; major: string }) {
    const student = {
      id: Date.now().toString(),
      name: data.name,
      major: data.major,
    };
    this.students.push(student);
    return student;
  }
}
