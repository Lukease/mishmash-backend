import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RecipesIngredients } from "../../lib/entity";
import { Recipe } from "./recpies";

@Injectable()
export class RecipesIngredientsService {
  constructor(
    @InjectRepository(RecipesIngredients)
    private recipesIngredientsRepository: Repository<RecipesIngredients>
  ) {
  }

  findAll() {
    return this.recipesIngredientsRepository.find();
  }

  async findAllRecipes(ingredientsId: Array<number>) {
    const allRecipes = await this.recipesIngredientsRepository.find();
    const specialRecipesSet: Set<number> = new Set();
    const findsRecipe: Array<number> = []

    allRecipes.forEach(recipe => {
      specialRecipesSet.add(recipe.recipesId);
    })

    const specialRecipes = Array.from(specialRecipesSet);

    const searchRecipe = specialRecipes.map(recipes => {
      const ingredientsArray: Set<number> = new Set();
      allRecipes.forEach(name => {
        if (recipes === name.recipesId) {
          ingredientsArray.add(name.ingredientsId)
        }
      });

      const newIngredientsArray = Array.from(ingredientsArray)
      const newRecipe: Recipe = {
        recipeId: recipes,
        ingredients: newIngredientsArray
      };

      const correctProducts = newRecipe.ingredients.every((ingredientRecipe) => ingredientsId.toString().toString().includes(ingredientRecipe.toString()));

      if (correctProducts === true) {
        return  newRecipe.recipeId
      }
        return
    });

      const correctRecipe = searchRecipe.filter(recipe => recipe !== undefined)

    return correctRecipe
  }

  findName(id: number) {
    return this.recipesIngredientsRepository.findOne({ recipesIngredientsId: id });
  }

  addRecipeIngredients(recipeId: number, ingredientsId: number) {
    return this.recipesIngredientsRepository.save({ recipesId: recipeId, ingredientsId: ingredientsId });
  }

  removeRecipeIngredients(id: number) {
    return this.recipesIngredientsRepository.delete({ recipesIngredientsId: id });
  }
}