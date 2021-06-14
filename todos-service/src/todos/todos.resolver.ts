import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './models/todo.model';
import { TodosService } from './todos.service';

@Resolver((of) => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(returns => [Todo])
  async todos() {
    return this.todosService.getTodos();
  }

  @Query(returns => Todo)
  async todo(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.getTodo(id);
  }
}
