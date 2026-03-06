import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class CourseService {
  private courses = [];
  constructor(
    @Inject(forwardRef(() => StudentService))
    private readonly studentService: StudentService,
  ) {}

  getAllCourses() {
    console.log(`Fetching Course`);
    return this.courses;
  }

  enroll(studentId: string, courseName: string) {
    const student = this.studentService.findById(studentId);
    if (!student) {
      return { error: 'Student not found' };
    }
    return { message: `${student.id} enrolled in ${courseName}` };
  }
}
