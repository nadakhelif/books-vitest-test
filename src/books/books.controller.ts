import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() book: Book) {
    return this.booksService.create(book);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedBook: Book) {
    return this.booksService.update(id, updatedBook);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.booksService.remove(id);
  }
}
