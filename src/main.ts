import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation for the project')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Groups')
    .addTag('Profiles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
