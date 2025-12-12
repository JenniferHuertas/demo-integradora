import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UserModule, TodosModule],
})
export class AppModule {}
