import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
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

    @Get(':id')
    async getOneBook(
        @Param('id')
        id : string
    ) : Promise<Book> {
        return this.bookService.findById(id);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book: Book
    ): Promise<Book> {
        return this.bookService.update(id, book);
    }  
    
    @Delete(':id')
    async delete(
        @Param('id')
        id : string
    ) : Promise<Book> {
        return this.bookService.delete(id);
    }
}
