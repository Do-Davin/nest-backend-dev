import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { StudentService } from './student.service';
import { CourseService } from 'src/course/course.service';
import { CreateStudentSchema } from './schemas/create-student.schema';
import { JoiValidationPipe } from 'src/common/joi-validation.pipe';
import type { StudentAttrs } from './student.model';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly courseService: CourseService,
  ) {}

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  // @Get('course')
  // getAllCourses() {
  //   return this.courseService.getAllCourses();
  // }

  @Post()
  @UsePipes(new JoiValidationPipe(CreateStudentSchema))
  create(@Body() body: StudentAttrs) {
    return this.studentService.create(body);
  }
}
