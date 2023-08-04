import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { BookService } from './book.service'; 
import { Book } from './Schemas/book.schema';
import { AuthGuard } from '@nestjs/passport';

import {Query as ExpressQuery} from 'express-serve-static-core';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }
    
    @Get()
    async getAllBooks(@Query() query : ExpressQuery ) : Promise<Book[]> {
        return this.bookService.findAll(query);
    }

    @Post()
    @UseGuards(AuthGuard())
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
