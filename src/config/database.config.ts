import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'saas_app_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // set to false for production
};
