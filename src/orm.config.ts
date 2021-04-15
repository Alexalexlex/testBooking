import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  database: 'bookingTest',
  synchronize: true,
  username: 'alexalexlex',
  password: '123',
  entities: ['dist/**/*.entity{.ts,.js}'],
};
