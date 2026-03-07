import mongoose from 'mongoose';

interface StudentAttrs {
  name: string;
  major: string;
  year: number;
}

interface StudentDoc extends mongoose.Document {
  name: string;
  major: string;
  year: number;
}

interface StudentModel extends mongoose.Model<StudentDoc> {
  build(studentAttrs: StudentAttrs): StudentDoc;
}

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    major: { type: String, required: true },
    year: { type: Number, required: true },
  },
  //   {
  //     toJSON: {
  //       transform(doc, ret) {
  //         ret.id = ret._id; // MongoDB uses _id, but most APIs prefer id
  //         delete ret._id; // After copying _id to id, we remove _id
  //         delete ret.__v; // __v is a Mongoose version key used internally
  //       },
  //     },
  //   },
);
schema.statics.build = (studentAttrs: StudentAttrs) =>
  new Student(studentAttrs);

const Student = mongoose.model<StudentDoc, StudentModel>('Student', schema);
