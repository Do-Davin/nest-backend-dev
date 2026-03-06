import { Controller, Post, Body, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { StudentService } from 'src/student/student.service';

@Controller('course')
export class CourseController {
  constructor(
    private readonly courseService: CourseService,
    private readonly studentService: StudentService,
  ) {}

  // @Get()
  // getAllStudents() {
  //   return this.studentService.findAll();
  // }

  @Get()
  getAllCourses() {
    return this.studentService.getAllCoursesFromStudent();
  }

  @Post('enroll')
  enroll(@Body() body: { studentId: string; courseName: string }) {
    return this.courseService.enroll(body.studentId, body.courseName);
  }
}
