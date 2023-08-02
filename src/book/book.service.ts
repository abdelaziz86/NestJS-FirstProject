import { Injectable, NotFoundException } from '@nestjs/common';
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

    async create(book: Book): Promise<Book> {
        const res = await this.bookModel.create(book);
        return res; 
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id);

        if (!book) {
            throw new NotFoundException('Book not found');
        }

        return book;
    }

    async update(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    }
}
