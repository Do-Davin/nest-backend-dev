import { Injectable, OnModuleInit } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit {
  async onModuleInit() {
    const host = process.env.MONGO_HOST || 'localhost';
    const port = process.env.MONGO_PORT || '27017';
    await mongoose.connect(`mongodb://${host}:${port}/student-api`);
    console.log('Connected to MongoDB');
  }
}
