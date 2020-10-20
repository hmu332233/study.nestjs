import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') moviceId: string) {
    return `This will return one movie with the id: ${moviceId}`;
  }

  @Post()
  createMovie() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a moive with the id: ${movieId}`;
  }

  @Put('/:id')
  patch(@Param('id') movieId: string) {
    return `This will update a moive with the id: ${movieId}`;
  }
}
