import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // for db connection
import { ConfigModule } from '@nestjs/config'; // for db connection
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
