import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service'; 
import { Book } from './Schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }
    
    @Get()
    async getAllBooks() : Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post()
    async createBook(
        @Body()
        book):
        Promise<Book> {
        return this.bookService.create(book);   
    }
}
