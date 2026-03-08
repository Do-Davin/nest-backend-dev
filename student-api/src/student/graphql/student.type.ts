import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  major: string;
  @Field()
  year: number;
}
