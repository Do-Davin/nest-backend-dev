import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(
        error.details.map((d) => d.message).join(', '),
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }
}
