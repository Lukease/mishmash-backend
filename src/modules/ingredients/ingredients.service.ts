import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Ingredient } from '../../lib/entity'

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>
  ) {
  }

  findAll() {
    return this.ingredientRepository.find()
  }

  findName(name: string) {
    return this.ingredientRepository.findOne({ name: name })
  }

  findId(id: number) {
    return this.ingredientRepository.findOne({ ingredientsId: id })
  }

  addIngredients(name: string) {
    return this.ingredientRepository.save({ name: name })
  }

  removeIngredients(id: number) {
    return this.ingredientRepository.delete({ ingredientsId: id })
  }

  editIngredients(id: number, newName: string) {
    return this.ingredientRepository.update({ingredientsId: id},{name: newName})
  }
}
