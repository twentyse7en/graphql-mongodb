import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Query } from '@nestjs/graphql';
import { Pet } from './pets.entity';
import { CreatePetInput } from './dto/create-pet-input.dto';

@Resolver()
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(() => Pet)
  createPet(@Args('input') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
