import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AboutUsModule } from './about-us/about-us.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { ProjectsModule } from './projects/projects.module';
import { WorkedsModule } from './workeds/workeds.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    AboutUsModule,
    SocialMediaModule,
    ProjectsModule,
    WorkedsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule { }
