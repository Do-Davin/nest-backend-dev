import Joi from 'joi';

export const CreateStudentSchema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  major: Joi.string().trim().required(),
  year: Joi.number().min(1).max(6).required(),
});
