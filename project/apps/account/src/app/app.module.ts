import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigAccountModule, getMongooseOptions } from '@project/shared/config/account';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogUserModule,
    AuthenticationModule,
    ConfigAccountModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
