import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [BooksModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
