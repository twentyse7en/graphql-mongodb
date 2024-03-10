/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Parent, ResolveField, Resolver, Query } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorsResolver {
  constructor() {}

  @Query()
  async author(@Args('id') id: number) {
    // return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author) {
    // const { id } = author;
    // return this.postsService.findAll({ authorId: id });
  }
}
