import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './Schemas/book.schema';


@Module({
  imports : [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
