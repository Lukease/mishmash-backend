import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { RecipesIngredientsService } from "./recipes-ingredients.service";
import { AddRecipeIngredientsDto, RemoveRecipeIngredientsDto, FindOneRecipeIngredientsDto, FindRecipeDto } from "./dto";
import { RecipeService } from "../recipe/recipe.service";

@Controller('recipesIngredients')
export class RecipesIngredientsController {
  constructor(
    private readonly recipesIngredientsService: RecipesIngredientsService,
    private recipeService : RecipeService
  ) {}

  @Get()
  getRecipeIngredientsByName() {
    return this.recipesIngredientsService.findAll()
  }

  @Get('by-ingredients')
  async getRecipeByIngredients(@Body() dto: FindRecipeDto) {
    const recipe = await this.recipesIngredientsService.findAllRecipes(dto.ingredientsId)

    const recipeArray =await Promise.all( recipe.map( async recipe => {
      return await this.recipeService.findId(recipe)
    }))

    return recipeArray
  }

  @Get('by-id')
  getRecipeIngredientsByOneName(@Body() dto: FindOneRecipeIngredientsDto) {
    return this.recipesIngredientsService.findName(dto.recipesIngredientsId)
  }

  @Post()
  addRecipeIngredients(@Body() dto: AddRecipeIngredientsDto) {
    return this.recipesIngredientsService.addRecipeIngredients(dto.recipesId, dto.ingredientsId)
  }

  @Delete()
  removeRecipeIngredients(@Body() dto: RemoveRecipeIngredientsDto) {
    return this.recipesIngredientsService.removeRecipeIngredients(dto.recipesIngredientsId)
  }

}
