import { Ingredients } from './ingredients.type'

export type OneRecipe = {
  recipeId: number,
  recipeName: string,
  ingredients: Array<Ingredients>
}