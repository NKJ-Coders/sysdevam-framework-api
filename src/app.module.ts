import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessRightModule } from './access-right/access-right.module';
import { TemplateModule } from './template/template.module';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionTemplateModule } from './transaction-template/transaction-template.module';
import { UserModule } from './user/user.module';
import { UserTransactionModule } from './user-transaction/user-transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sys_framework_db',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AccessRightModule,
    TemplateModule,
    TransactionModule,
    TransactionTemplateModule,
    UserModule,
    UserTransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
