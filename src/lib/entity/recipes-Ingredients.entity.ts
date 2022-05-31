import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Ingredient } from "./ingredients.entity";
import { Recipe } from "./recipes.entity";

@Entity({name: 'recipesIngredients'})
export class RecipesIngredients {
  @PrimaryGeneratedColumn()
  recipesIngredientsId: number

  @Column()
  recipesId: number

  @Column()
  ingredientsId: number

  @ManyToOne(
    () => Ingredient,
    ingredient => ingredient.recipesIngredients
  )
  @JoinColumn({ name: 'ingredientsId' })
  ingredient: Array<Ingredient>

  @ManyToOne(
    () => Recipe,
    recipe => recipe.recipesIngredients
  )
  @JoinColumn({ name: 'recipesId' })
  recipe: Array<Recipe>
}