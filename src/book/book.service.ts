import { Injectable } from '@nestjs/common';
import { Book } from './Schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'; 

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) { }

    async findAll():Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }
}
