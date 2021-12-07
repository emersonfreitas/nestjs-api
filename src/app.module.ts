import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RobbotController as RobotController } from './robbot/robbot.controller';
import { RobbotService as RobotService } from './robbot/robbot.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    OrdersModule,
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   models: [Order],
    //   autoLoadModels: true,
    // }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      database: 'robot',
      username: 'root',
      password: 'root',
      models: [Order],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController, RobotController],
  providers: [AppService, RobotService], // container de serviços
})
export class AppModule {}
