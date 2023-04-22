import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const PORT = 6068;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`app start with port ${PORT}`);
  });
}
bootstrap();
