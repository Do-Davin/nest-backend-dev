import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { forwardRef } from '@nestjs/common';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [forwardRef(() => CourseModule)],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
