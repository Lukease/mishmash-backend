import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { RecipeService } from './recipe.service'

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getRecipeByName() {
    return this.recipeService.findAll()
  }

  @Get('by-name')
  getRecipeByOneName(@Query('recipeName') recipeName: string) {
    return this.recipeService.findName(recipeName)
  }

  @Get('by-all')
  getRecipe() {
    return this.recipeService.findRecipe()
  }

  @Post()
  addRecipe(@Query('recipeName') recipeName: string) {
    return this.recipeService.addRecipe(recipeName)
  }

  @Delete()
  removeRecipe(@Query('recipesId') recipesId: number) {
    return this.recipeService.removeRecipe(recipesId)
  }
}
