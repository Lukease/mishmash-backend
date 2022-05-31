import { Injectable } from "@nestjs/common";
import { Recipe } from "../../lib/entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RecipesIngredients } from "../../lib/entity";
import { Ingredient } from "../../lib/entity";
import { RecipeTypeDao } from "./dao";
import { Ingredients, OneRecipe } from "./types";

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>
  ) {
  }

  findAll() {
    return this.recipeRepository.find();
  }

  findName(name: string) {
    return this.recipeRepository.findOne({ name: name });
  }

  findId(id: number) {
    return this.recipeRepository.findOne({ recipesId: id });
  }

  async findRecipe() {
    const recipe = await this.recipeRepository
      .createQueryBuilder("R")
      .select("R.recipesId, R.name AS recipeName, I.ingredientsId, I.name AS ingredientsName")
      .innerJoin(RecipesIngredients, "RI", "R.recipesId = RI.recipesId")
      .innerJoin(Ingredient, "I", "I.ingredientsId = RI.ingredientsId")
      .getRawMany<RecipeTypeDao>();

    return recipe.reduce((acc, item) => {
      const elementInAcc = acc.find(element => element.recipeId === item.recipesId);

      if (!elementInAcc) {
        return [
          ...acc,
          {
            recipeId: item.recipesId,
            recipeName: item.recipeName,
            ingredients: [
              {
                ingredientsId: item.ingredientsId,
                ingredientsName: item.ingredientsName
              }
            ]
          }];
      }
      return acc.map(ingredientInRecipe => {
        if (ingredientInRecipe.recipeId === item.recipesId) {
          return {
            ...ingredientInRecipe,
            ingredients: ingredientInRecipe.ingredients.concat({
              ingredientId: item.ingredientsId,
              ingredientName: item.ingredientsName
            })
          };
        }
        return ingredientInRecipe;
      });
    }, [] as Array<OneRecipe>);

    // return recipe;
  }

  addRecipe(name: string) {
    return this.recipeRepository.save({ name: name });
  }

  removeRecipe(id: number) {
    return this.recipeRepository.delete({ recipesId: id });
  }
}
