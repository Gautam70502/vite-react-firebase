import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './response/response.interceptor';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://127.0.0.1:3000',
        'http://localhost:3000',
        'https://rs3t49qh-3000.inc1.devtunnels.ms',
        'http://localhost:3001',
        'https://rs3t49qh-3001.inc1.devtunnels.ms',
      ], // Frontend origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      // skipMissingProperties: true,
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
