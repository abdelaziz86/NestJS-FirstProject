import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { BookService } from './book.service'; 
import { Book } from './Schemas/book.schema';
import { AuthGuard } from '@nestjs/passport';

import {Query as ExpressQuery} from 'express-serve-static-core';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }
    
    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        
        return this.bookService.findAll(query);
    }

    @Post()
    @UseGuards(AuthGuard())
    async createBook(
        @Body()
        book: CreateBookDto,
        @Req() req,
    ): Promise<Book> {
        console.log(req.user); 
        return this.bookService.create(book, req.user);
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
