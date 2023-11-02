import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder,SwaggerCustomOptions } from '@nestjs/swagger';
import { ApiOkResponse } from '@nestjs/swagger';
async function bootstrap() {
  // const swaggerConfig = new SwaggerModule({
  //   title: 'My API',
  //   description: 'This is my API description.',
  //   version: '1.0',
  // });

  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"*"})

  const userOptions:SwaggerCustomOptions = {
    swaggerOptions: {
      authAction: {
        // defaultBearerAuth: {
        //   name: 'defaultBearerAuth',
        //   schema: {
        //     description: 'Default',
        //     type: 'http',
        //     in: 'header',
        //     scheme: 'bearer',
        //     value: '',
        //   },
        // },
      },
    },
  };

  const userConfig = new DocumentBuilder()
  .setTitle('api')
  .setDescription('api')
  .setVersion('1.0')
  // .addBearerAuth(undefined, 'defaultBearerAuth')
  .build();

  // const userDocuments = SwaggerModule.createDocument(app,userConfig,{
  //   include: UserModules,
  // })
  // SwaggerModule.setup('swagger/user',app,userDocuments,userOptions)

  // SwaggerModule.setup('swagger',app,{})

  await app.listen(3000);
}
bootstrap();
