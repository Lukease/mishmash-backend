import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { RecipesIngredients } from './recipes-Ingredients.entity'

@Entity({name: 'ingredients'})
export class Ingredient {
  @PrimaryGeneratedColumn()
  ingredientsId: number

  @Column()
  name: string

  @OneToMany(
    () => RecipesIngredients,
    recipesIngredients => recipesIngredients.ingredientsId
  )
  recipesIngredients: Array<RecipesIngredients>
}