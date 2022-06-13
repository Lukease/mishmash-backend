import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { RecipesIngredients } from './recipes-Ingredients.entity'

@Entity({name: 'recipes'})
export class Recipe {
  @PrimaryGeneratedColumn()
  recipesId: number

  @Column()
  name: string

  @OneToMany(
    () => RecipesIngredients,
    recipesIngredients => recipesIngredients.recipesId
  )
  recipesIngredients: Array<RecipesIngredients>
}