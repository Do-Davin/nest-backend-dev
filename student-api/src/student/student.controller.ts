import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/student.dto';
import { CourseService } from 'src/course/course.service';

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
  create(@Body() createStudentDto: CreateStudentDto) {
    console.log(`Student Created successfully: ${createStudentDto.name}`);
    return this.studentService.create(createStudentDto);
  }
}
