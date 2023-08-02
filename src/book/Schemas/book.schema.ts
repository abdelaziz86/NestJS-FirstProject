import { Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}


@Schema({
    timestamps: true
})
export class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category :  Category

}


export const BookSchema = SchemaFactory.createForClass(Book);