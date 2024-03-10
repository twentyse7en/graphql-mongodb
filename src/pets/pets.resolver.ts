import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Query } from '@nestjs/graphql';
import { Pet } from './pets.entity';
import { CreatePetInput } from './dto/create-pet-input.dto';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  // for resolving nested values
  @ResolveField(() => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.ownerId);
  }

  @Mutation(() => Pet)
  createPet(@Args('input') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
