import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // generate an instance of the require type
      whitelist: true, // return expected value
      forbidNonWhitelisted: true, // don't accept unwanted request value
    }),
  );
  await app.listen(3000);
}
bootstrap();
