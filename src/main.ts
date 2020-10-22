import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 허용된 애들을 거르고 통과시킴
      forbidNonWhitelisted: true, // 이상한걸 보내면 request를 막음
      transform: true, // 지정해둔 타입으로 변경해줌
    }),
  );

  await app.listen(3000);
}
bootstrap();
