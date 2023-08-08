import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { GatewayModule } from './gateway/gateway.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ // ============ for env
      envFilePath: '.env',
      isGlobal : true
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    }), // ============ for mongo
    BookModule, AuthModule,
    GatewayModule,
    ServeStaticModule.forRoot({
      rootPath : join(__dirname, '..', 'client'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
