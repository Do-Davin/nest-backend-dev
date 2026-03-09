import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { StudentModule } from 'src/modules/student/student.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => StudentModule)],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
