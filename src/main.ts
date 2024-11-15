import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //class validator 
  app.useGlobalPipes(new ValidationPipe());

  //swagger
  const confi = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The Produc API description')
  .setVersion('1.0')
  .addTag('product')
  .build();
  const document = SwaggerModule.createDocument(app, confi);
  SwaggerModule.setup('api', app, document);
  await app.listen(3002);
}
bootstrap();
