import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { RecipesIngredientsService } from './recipes-ingredients.service'
import { AddRecipeIngredientsDto, FindOneRecipeIngredientsDto } from './dto'
import { RecipeService } from '../recipe/recipe.service'

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
  async getRecipeByIngredients(@Query('ingredientsId') ingredientsId: Array<number>) {
    const recipe = await this.recipesIngredientsService.findAllRecipes(ingredientsId)

    return await Promise.all(recipe.map(async recipe => {
      return await this.recipeService.findId(recipe)
    }))
  }

  @Get('by-one-ingredients')
  async getRecipeByOneIngredients(@Query('ingredientsId') ingredientsId: number) {
    const recipe = await this.recipesIngredientsService.findOneRecipes(ingredientsId)

    return await Promise.all(recipe.map(async recipe => {
      return await this.recipeService.findId(recipe)
    }))
  }

  @Get('by-id')
  getRecipeIngredientsByOneName(@Body() dto: FindOneRecipeIngredientsDto) {
    return this.recipesIngredientsService.findName(dto.recipesIngredientsId)
  }

  @Get('by-recipe')
  getRecipeIngredientsByRecipe(@Query('recipeId') recipeId: number) {
    return this.recipesIngredientsService.findRecipeIngredient(recipeId)
  }

  @Post()
  addRecipeIngredients(@Body() dto: AddRecipeIngredientsDto) {
    return this.recipesIngredientsService.addRecipeIngredients(dto.recipesId, dto.ingredientsId)
  }

  @Delete()
  removeRecipeIngredients(@Query('recipesIngredientsId') recipesIngredientsId: number ) {
    return this.recipesIngredientsService.removeRecipeIngredients(recipesIngredientsId)
  }
}
