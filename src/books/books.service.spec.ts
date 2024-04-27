import { BooksService } from './books.service';
import { expect } from 'vitest';
import { test } from 'vitest';

test('BooksService - create', async () => {
  const booksService = new BooksService();
  const book = { id: 1, title: 'Test Book' };

  const result = await booksService.create(book);

  expect(result).toEqual(book);
});

test('BooksService - findAll', async () => {
  const booksService = new BooksService();
  const book = { id: 1, title: 'Test Book' };
  await booksService.create(book);

  const result = await booksService.findAll();

  expect(result.length).toBe(1);
  expect(result[0]).toEqual(book);
});
test('BooksService - findOne', async () => {
  const booksService = new BooksService();
  const book = { id: 1, title: 'Test Book' };
  await booksService.create(book);

  const result = await booksService.findOne(1);

  expect(result).toEqual(book);
});

test('BooksService - update', async () => {
  const booksService = new BooksService();
  const book = { id: 1, title: 'Test Book' };
  await booksService.create(book);

  const updatedBook = { title: 'Updated Test Book' };
  const result = await booksService.update(1, updatedBook);

  expect(result.title).toBe(updatedBook.title);
});

test('BooksService - remove', async () => {
  const booksService = new BooksService();
  const book = { id: 1, title: 'Test Book' };
  await booksService.create(book);

  await booksService.remove(1);
  const result = await booksService.findOne(1);

  expect(result).toBeUndefined();
});
