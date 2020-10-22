import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialType - 다른 dto에서 부분적으로 필드를 가질 수 있게 해줌
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}