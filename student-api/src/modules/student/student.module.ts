import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { forwardRef } from '@nestjs/common';
import { CourseModule } from 'src/modules/course/course.module';
import { StudentResolver } from './graphql/student.resolver';

@Module({
  imports: [forwardRef(() => CourseModule)],
  controllers: [StudentController],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
