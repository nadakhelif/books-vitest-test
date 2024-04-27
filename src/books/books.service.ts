import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [];
  create(book) {
    this.books.push(book);
    return book;

  }
  findAll(){
    return this.books;
  }
  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }
  update(id: number, updatedBook) {
    const book = this.books.find((book) => book.id === id);
    Object.assign(book, updatedBook);
    return book;
  }

  remove(id: number) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex > -1) {
      this.books.splice(bookIndex, 1);
    }
  }
}
