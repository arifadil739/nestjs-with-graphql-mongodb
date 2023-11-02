import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection } from 'mongoose';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (configService:ConfigService)=>({
        // uri:configService.get<string>("DB_URL"),
        uri:"mongodb+srv://arifadil739:mongo@cluster0.ghkwadf.mongodb.net/?retryWrites=true&w=majority",
      }),
      
      inject: [ConfigService],
    }),
    UserModule,
    
  ],
  providers: [],
})
export class AppModule {}