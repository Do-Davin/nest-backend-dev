import { Query, Resolver } from '@nestjs/graphql';
import { StudentService } from '../student.service';
import { StudentType } from './student.type';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentType])
  student() {
    return this.studentService.findAll();
  }
}
